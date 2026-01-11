# API Playground

Comparison of API technologies running on Azure Functions with type-safe contracts.

## Technologies

1. **GraphQL (Apollo)** - schema-first with .graphql files + @graphql-codegen
2. **GraphQL (Pothos)** - code-first TypeScript
3. **tRPC** - TypeScript RPC with magic
4. **ts-rest** - type-safe REST
5. **REST (Zod + OpenAPI)** - traditional REST with validation

## Project Setup

### 1. Initialize Repository

```sh
mkdir api-playground && cd api-playground
git init
pnpm init
```

### 2. Generate .gitignore

```sh
curl -L "https://www.toptal.com/developers/gitignore/api/node,visualstudiocode,windows,linux,macos,azurefunctions,turbo" -o .gitignore
```

Or visit: https://www.toptal.com/developers/gitignore/api/node,visualstudiocode,windows,linux,macos,azurefunctions,turbo

### 3. Create Workspace Structure

```sh
mkdir -p apps packages

cat > pnpm-workspace.yaml << 'EOF'
packages:
  - apps/*
  - packages/*
EOF
```

### 4. Set Node Version

```sh
echo "22" > .nvmrc
```

### 5. Install Root DevDependencies

```sh
pnpm add -D -w turbo @biomejs/biome lefthook syncpack npm-check-updates typescript
```

### 6. Create Shared TypeScript Config Package

```sh
mkdir -p packages/typescript-config/azure-functions
cd packages/typescript-config
pnpm init

# Create base tsconfig
cat > tsconfig.json << 'EOF'
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noUncheckedSideEffectImports": true,
    "noFallthroughCasesInSwitch": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
EOF

# Create azure-functions tsconfig
cat > azure-functions/tsconfig.json << 'EOF'
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "target": "ES2024",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "moduleDetection": "force",
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
EOF
```

### 7. Initialize Biome

```sh
cat > biome.json << 'EOF'
{
  "$schema": "https://biomejs.dev/schemas/2.3.10/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": false,
    "includes": ["**"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "lineWidth": 320,
    "indentWidth": 2,
    "lineEnding": "lf",
    "attributePosition": "auto"
  },
  "assist": { "actions": { "source": { "organizeImports": "on" } } },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "suspicious": {
        "noExplicitAny": "info"
      },
      "correctness": {
        "noUnusedFunctionParameters": "error",
        "noUnusedImports": "error",
        "noUnusedVariables": "error"
      },
      "style": {
        "useImportType": "error",
        "useBlockStatements": "error",
        "noNonNullAssertion": "warn",
        "noParameterAssign": "error",
        "useAsConstAssertion": "error",
        "useDefaultParameterLast": "error",
        "useEnumInitializers": "error",
        "useSelfClosingElements": "error",
        "noInferrableTypes": "error",
        "noUselessElse": "error"
      },
      "performance": {
        "noBarrelFile": "error"
      }
    }
  },
  "graphql": {
    "formatter": {
      "enabled": true
    },
    "linter": {
      "enabled": true
    }
  },
  "json": {
    "parser": {
      "allowComments": true,
      "allowTrailingCommas": false
    }
  },
  "javascript": {
    "parser": {
      "unsafeParameterDecoratorsEnabled": true
    },
    "formatter": {
      "quoteStyle": "single",
      "semicolons": "always",
      "arrowParentheses": "always",
      "bracketSpacing": true,
      "bracketSameLine": true,
      "trailingCommas": "all",
      "quoteProperties": "asNeeded",
      "attributePosition": "auto"
    }
  }
}
EOF
```

### 8. Initialize Turbo

```sh
cat > turbo.json << 'EOF'
{
  "$schema": "https://turbo.build/schema.json",
  "ui": "stream",
  "daemon": false,
  "tasks": {
    "topo": {
      "dependsOn": ["^topo"]
    },
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["tsconfig.json", "**/*.ts"],
      "outputs": ["dist"]
    },
    "codegen": {},
    "dev": {
      "cache": false,
      "persistent": true
    },
    "start": {
      "dependsOn": ["build"],
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": []
    },
    "type-check": {
      "dependsOn": ["topo"],
      "inputs": ["tsconfig.check.json"],
      "outputs": ["**/node_modules/.cache/tsbuildinfo.json"]
    }
  }
}
EOF
```

### 9. Create Git Hooks Configuration

```sh
cat > lefthook.yml << 'EOF'
pre-commit:
  commands:
    check:
      run: pnpm biome check --diagnostic-level=error --fix --no-errors-on-unmatched --colors=off {staged_files}
      stage_fixed: true
pre-push:
  commands:
    check:
      run: pnpm biome ci --diagnostic-level=error --no-errors-on-unmatched --colors=off {push_files}
EOF
```

### 10. Create GitVersion Configuration

```sh
cat > GitVersion.yml << 'EOF'
mode: Mainline
branches: {}
ignore:
  sha: []
merge-message-formats: {}
EOF
```

### 11. Install Lefthook Hooks

```sh
pnpm lefthook install
```

### 12. Update Root package.json Scripts

```sh
for script in \
  "lint=biome lint" \
  "format=biome format" \
  "ci=biome ci --diagnostic-level=error" \
  "ci:fix=biome check --diagnostic-level=error --fix" \
  "type-check=turbo run type-check" \
  "build=turbo run build" \
  "check=turbo run check" \
  "clean=turbo run clean" \
  "test=turbo run test" \
  "dev=turbo run dev --concurrency 15" \
  "list-mismatches=syncpack list-mismatches" \
  "fix-mismatches=syncpack fix-mismatches" \
  "updates=npm-check-updates --workspaces"; do
  pnpm pkg set "scripts.$script"
done
```

### 13. Create VS Code Workspace Configuration

```sh
mkdir -p .vscode

# Create extensions recommendations (Doc Writer profile)
cat > .vscode/extensions.json << 'EOF'
{
  "recommendations": [
    "streetsidesoftware.code-spell-checker",
    "bierner.markdown-checkbox",
    "bierner.markdown-emoji",
    "bierner.markdown-footnotes",
    "bierner.github-markdown-preview",
    "bierner.markdown-mermaid",
    "bierner.markdown-yaml-preamble",
    "davidanson.vscode-markdownlint",
    "ms-vscode.wordcount",
    "johnpapa.read-time"
  ]
}
EOF

# Create workspace settings (Doc Writer profile)
cat > .vscode/settings.json << 'EOF'
{
  "editor.minimap.enabled": false,
  "breadcrumbs.enabled": false,
  "editor.glyphMargin": false,
  "explorer.decorations.badges": false,
  "explorer.decorations.colors": false,
  "editor.fontLigatures": true,
  "files.autoSave": "afterDelay",
  "git.enableSmartCommit": true,
  "window.commandCenter": true,
  "editor.renderWhitespace": "none",
  "workbench.editor.untitled.hint": "hidden",
  "markdown.validate.enabled": true,
  "markdown.updateLinksOnFileMove.enabled": "prompt",
  "workbench.startupEditor": "none"
}
EOF
```

### 14. Set Package Names (Optional)

```sh
# Set root package name
pnpm pkg set name="@api-playground/root"

# Set package names for all workspace packages
for pkg in packages/*; do
  if [ -f "$pkg/package.json" ]; then
    pkg_name=$(basename "$pkg")
    (cd "$pkg" && pnpm pkg set name="@api-playground/$pkg_name")
  fi
done
```

## Workspace Structure

```
api-playground/
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── apps/
│   ├── apollo-graphql/       # Apollo Server (schema-first)
│   ├── pothos-graphql/       # Pothos (code-first)
│   ├── trpc/                 # tRPC
│   ├── ts-rest/              # ts-rest
│   └── rest-openapi/         # Zod + OpenAPI
├── packages/
│   └── typescript-config/    # Shared TypeScript configs
├── .nvmrc
├── biome.json
├── GitVersion.yml
├── lefthook.yml
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Package Exports Pattern

Packages use [JIT (Just-In-Time) types](https://turborepo.com/docs/guides/tools/typescript#just-in-time-packages) with compiled JavaScript, following [Turborepo's TypeScript best practices](https://turborepo.com/docs/guides/tools/typescript):

**Single entry point:**
```json
{
  "type": "module",
  "exports": {
    ".": {
      "types": "./src/index.ts",
      "default": "./dist/index.js"
    }
  }
}
```

**Multiple entry points (wildcard):**
```json
{
  "type": "module",
  "exports": {
    "./*": {
      "types": "./src/*.ts",
      "default": "./dist/*.js"
    }
  }
}
```

TypeScript consumers get direct `.ts` source for instant type updates, runtime gets compiled `.js`. Avoid [barrel files](https://vercel.com/blog/how-we-optimized-package-imports-in-next-js#what's-the-problem-with-barrel-files).

### Type Checking

The `type-check` task uses a [transit node pattern](https://turborepo.com/docs/guides/tools/typescript#linting-your-codebase) (`topo`) for fast parallel type checking without waiting for builds to complete, while still respecting topological ordering of dependencies.

## Common Dependencies

### Azure Functions Apps

- `@azure/functions` - Azure Functions runtime
- `esbuild` - Building
- `tsx` - TypeScript execution
- `npm-run-all2` - Parallel scripts
- `@dotenvx/dotenvx` - Environment management
- `@shellicar/build-version` - Version injection

### Technology-Specific

- **GraphQL (Apollo)**: `@apollo/server`, `@as-integrations/azure-functions`, `@graphql-codegen/cli`
- **GraphQL (Pothos)**: `@pothos/core`, `@pothos/plugin-*`
- **tRPC**: `@trpc/server`, `@trpc/client`
- **ts-rest**: `@ts-rest/core`, `@ts-rest/azure-functions`
- **REST**: `zod`, `@asteasolutions/zod-to-openapi`
