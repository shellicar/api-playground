# Azure Functions App Setup

Common setup steps for creating a new Azure Functions app in this monorepo.

## Prerequisites

- Workspace initialized (see [Setup Guide](Setup_Guide.md))
- Azure Functions Core Tools installed

## Steps

### 1. Create App Directory

```sh
cd apps
mkdir <app-name>
cd <app-name>
APP_NAME=$(basename $(pwd))
```

### 2. Initialize Package

```sh
pnpm init
pnpm pkg set name="@api-playground/$APP_NAME"
```

### 3. Add TypeScript Config Dependency

```sh
pnpm add -D @api-playground/typescript-config@workspace:*
```

### 4. Create TypeScript Configuration

```sh
cat > tsconfig.json << 'EOF'
{
  "extends": "@api-playground/typescript-config/azure-functions/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "."
  },
  "include": ["src/**/*.ts", "build.ts"],
  "exclude": ["node_modules"]
}
EOF
```

### 5. Initialize Azure Functions

```sh
func init --typescript --model V4 --skip-npm-install
```

This creates:

- `host.json` - Azure Functions host configuration
- `local.settings.json` - Local development settings
- `.funcignore` - Files to exclude from deployment
- `.gitignore` - Git ignore patterns
- `.vscode/extensions.json` - VS Code extension recommendations
- `src/` - Source directory

The command will skip `package.json` and `tsconfig.json` since they already exist.

### 6. Add Azure Functions Dependencies

```sh
pnpm add @azure/functions
pnpm add -D typescript esbuild tsx npm-run-all2 @dotenvx/dotenvx @types/node @shellicar/build-clean
```

### 7. Configure Package for ESM

```sh
pnpm pkg set type="module"
pnpm pkg set main="dist/functions/*.mjs"
```

### 8. Create Type-Check Configuration

```sh
cat > tsconfig.check.json << 'EOF'
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": true,
    "skipLibCheck": true,
    "tsBuildInfoFile": "node_modules/.cache/tsbuildinfo.json"
  }
}
EOF
```

### 9. Create Build Script

```sh
cat > build.ts << 'EOF'
import cleanPlugin from '@shellicar/build-clean/esbuild';
import * as esbuild from 'esbuild';

const watch = process.argv.includes('--watch');

const ctx = await esbuild.context({
  entryPoints: ['src/functions/*.ts'],
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'esm',
  outdir: 'dist',
  entryNames: 'functions/[name]',
  chunkNames: 'chunks/[name]-[hash]',
  outExtension: { '.js': '.mjs' },
  packages: 'external',
  sourcemap: true,
  minify: false,
  splitting: true,
  plugins: [cleanPlugin({ destructive: true })],
});

if (watch) {
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  await ctx.rebuild();
  await ctx.dispose();
}
EOF
```

### 10. Add Package Scripts

```sh
# Set port for this app (7071 for first app, 7072 for second, etc.)
# Debug port aligns with last two digits: 9071, 9072, etc.
PORT=7071
DEBUG_PORT=9071

for script in \
  "build=tsx build.ts" \
  "build:watch=tsx build.ts --watch" \
  "dev=run-p build:watch start" \
  "start=func start --port $PORT --verbose" \
  "start:debug=func start --port $PORT --language-worker -- --inspect=$DEBUG_PORT" \
  "type-check=tsc --project tsconfig.check.json"; do
  pnpm pkg set "scripts.$script"
done
```

### 11. Create Health Check Endpoint

```sh
cat > src/functions/health.ts << 'EOF'
import { app, type HttpRequest, type HttpResponseInit, type InvocationContext } from '@azure/functions';

export async function health(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  return {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'OK' }),
  };
}

app.http('health', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: health,
});
EOF
```

### 12. Add VS Code Debug Configuration

Add a debug configuration to `.vscode/launch.json` at the workspace root:

```sh
# If launch.json doesn't exist, create it with an empty configurations array
if [ ! -f ../../.vscode/launch.json ]; then
  cat > ../../.vscode/launch.json << 'EOF'
{
  "version": "0.2.0",
  "configurations": []
}
EOF
fi

# Add configuration for this app (update APP_NAME and PORT values)
cat << EOF

Add this configuration to .vscode/launch.json:
{
  "name": "Attach to $APP_NAME",
  "type": "node",
  "request": "attach",
  "port": 9071,
  "restart": true,
  "outFiles": [
    "\${workspaceFolder}/apps/$APP_NAME/dist/**/*.(m|c|)js",
    "\${workspaceFolder}/packages/**/dist/**/*.(m|c|)js",
    "!**/node_modules/**"
  ]
}
EOF
```

**Note:** Update the port number to match your debug port (9071 for first app, 9072 for second, etc.).

## Next Steps

1. Test the build: `pnpm build`
2. Test the dev server: `pnpm dev`
3. For debugging:
   - Run `pnpm start:debug` to start with debugger enabled (port 9071)
   - In VS Code, use the debug panel (F5) and select the "Attach to..." configuration
   - Set breakpoints and debug your functions
4. Add technology-specific dependencies and implementation
