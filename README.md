# API Playground

This repository compares type-safe API technologies running on Azure Functions, evaluating their developer experience, type safety mechanisms, and configuration complexity.

## Technologies

### 1. GraphQL (Apollo) - Schema-First

`.graphql` schema files with `@graphql-codegen` for type generation. Traditional GraphQL approach with SDL as source of truth.

### 2. GraphQL (Pothos) - Code-First

TypeScript-first GraphQL schema builder. Type-safe schema construction using Pothos builders.

### 3. GraphQL (gqloom) - Zod-First

GraphQL schema generated from Zod validators. Validation library as source of truth.

### 4. tRPC

End-to-end type-safe RPC. Maximum coupling between frontend and backend via TypeScript inference.

### 5. ts-rest

Type-safe REST with explicit contract definitions. Shared TypeScript contract between client and server.

### 6. REST (Zod + OpenAPI)

Traditional REST with runtime validation. Zod schemas generate OpenAPI spec and TypeScript types.

## Getting Started

See [Setup Guide](docs/SETUP.md) for complete project initialization steps.

## Implementations

### GraphQL (Apollo) - Schema-First

Location: `apps/apollo-graphql`

Implementation in progress

## Workspace Structure

```text
api-playground/
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── apps/
│   ├── apollo-graphql/       # Apollo Server (schema-first)
│   ├── pothos-graphql/       # Pothos (code-first)
│   ├── gqloom-graphql/       # gqloom (Zod-first)
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
- **GraphQL (gqloom)**: `@gqloom/core`, `@gqloom/zod`, `zod`
- **tRPC**: `@trpc/server`, `@trpc/client`
- **ts-rest**: `@ts-rest/core`, `@ts-rest/azure-functions`
- **REST**: `zod`, `@asteasolutions/zod-to-openapi`
