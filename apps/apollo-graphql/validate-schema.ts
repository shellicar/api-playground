import { readFileSync } from 'node:fs';
import { glob } from 'glob';
import { buildSchema } from 'graphql';

const schemaFiles = await glob('src/features/**/*.graphql');
const schemaDefs = schemaFiles.map((file) => readFileSync(file, 'utf-8')).join('\n');

try {
  buildSchema(schemaDefs);
  console.log(`✅ Schema validation passed (${schemaFiles.length} files)`);
  process.exit(0);
} catch (error) {
  console.error('❌ Schema validation failed:');
  console.error(error);
  process.exit(1);
}
