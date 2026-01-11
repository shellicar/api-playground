import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';
import type { TypeScriptResolversPluginConfig } from '@graphql-codegen/typescript-resolvers';

const config: CodegenConfig = {
  schema: 'src/schema/**/*.graphql',
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
        useTypeImports: true,
        contextType: './context#GraphQLContext',
        strictScalars: true,
        nonOptionalTypename: true,
        scalars: {
          UUID: 'string',
          LocalDate: '@js-joda/core#LocalDate',
          Instant: '@js-joda/core#Instant',
          Cursor: 'string',
          Void: 'undefined',
        },
      } satisfies TypeScriptPluginConfig & TypeScriptResolversPluginConfig,
    },
  },
};

export default config;
