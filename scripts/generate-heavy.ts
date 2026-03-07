/**
 * Generate HEAVY TypeScript files that make SWC/tsc actually work hard.
 * Strategy: deeply nested generics, mapped types, conditional types,
 * large unions, complex class hierarchies, lots of barrel re-exports.
 */
import { mkdirSync, writeFileSync, existsSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const ROOT = join(__dirname, '..');

function heavyTypeFile(name: string, index: number): string {
  // Generate complex generic types that force the compiler to work
  const depth = 5 + (index % 5);
  let nestedType = 'T';
  for (let i = 0; i < depth; i++) {
    nestedType = `Promise<Array<Partial<Record<string, ${nestedType}>>>>`;
  }

  const unionSize = 20 + (index % 30);
  const unionMembers = Array.from({ length: unionSize }, (_, i) =>
    `{ kind: '${name}_variant_${i}'; data_${i}: string; nested_${i}: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }`
  ).join('\n  | ');

  const mappedFields = Array.from({ length: 15 + index % 10 }, (_, i) =>
    `field${i}: T extends { field${i}: infer U } ? U extends string ? Uppercase<U> : U : never;`
  ).join('\n    ');

  return `
// Complex type computations for ${name}
export type DeepReadonly${name}<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonly${name}<U>>
      : DeepReadonly${name}<T[P]>
    : T[P];
};

export type DeepPartial${name}<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartial${name}<U>>
      : DeepPartial${name}<T[P]>
    : T[P];
};

export type ${name}Nested = ${nestedType};

export type ${name}Union =
  | ${unionMembers};

export type Extract${name}Kind<T extends ${name}Union> = T['kind'];

export type ${name}ByKind<K extends ${name}Union['kind']> = Extract<${name}Union, { kind: K }>;

export type ${name}MappedResult<T> = {
    ${mappedFields}
};

export type ${name}Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: \`\${T}_\${U}\` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: ${name}Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type ${name}RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? ${name}RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface ${name}EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}

${Array.from({ length: 8 + index % 5 }, (_, i) => `
export interface ${name}Entity${i} extends ${name}EntityBase {
  name${i}: string;
  value${i}: number;
  config${i}: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, ${name}Entity${i > 0 ? i - 1 : 0} | null> };
      };
    }>;
  };
  relations: Map<string, ${name}Entity${i}[]>;
}
`).join('')}

export class ${name}Registry {
  private entities = new Map<string, ${name}EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends ${name}EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): ${name}EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): ${name}EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends ${name}EntityBase>(predicate: (entity: ${name}EntityBase) => entity is T): T[] {
    return this.findAll().filter(predicate);
  }

  buildIndex(field: string): void {
    const index = new Map<string, Set<string>>();
    for (const [id, entity] of this.entities) {
      const value = String((entity as any)[field] ?? '');
      if (!index.has(value)) index.set(value, new Set());
      index.get(value)!.add(id);
    }
    this.indexes.set(field, index);
  }

  lookupByIndex(field: string, value: string): ${name}EntityBase[] {
    const index = this.indexes.get(field);
    if (!index) return [];
    const ids = index.get(value);
    if (!ids) return [];
    return [...ids].map(id => this.entities.get(id)!).filter(Boolean);
  }

  clear(): void {
    this.entities.clear();
    this.indexes.clear();
  }

  get size(): number {
    return this.entities.size;
  }

  toJSON(): Record<string, ${name}EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const ${name}_CONSTANTS = {
  MAX_DEPTH: ${depth},
  UNION_SIZE: ${unionSize},
  VERSION: '${index}.${index % 10}.${index % 100}',
} as const;
`.trim();
}

function generateHeavyFiles(dir: string, count: number, prefix: string): number {
  const heavyDir = join(dir, 'src', 'lib', 'heavy');
  mkdirSync(heavyDir, { recursive: true });

  const files: string[] = [];
  for (let i = 0; i < count; i++) {
    const name = `${prefix}Heavy${i}`;
    const fileName = `heavy-${i}.types.ts`;
    writeFileSync(join(heavyDir, fileName), heavyTypeFile(name, i));
    files.push(fileName);
  }

  const barrel = files.map(f => `export * from './${f.replace('.ts', '')}';`).join('\n');
  writeFileSync(join(heavyDir, 'index.ts'), barrel + '\n');

  return files.length;
}

function toPascalCase(str: string): string {
  return str.split(/[-_]/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

// --- Scale config ---
// Heavy type files per project category
const HEAVY_COUNTS: Record<string, number> = {};

const libDirs = readdirSync(join(ROOT, 'libs')).filter(d =>
  existsSync(join(ROOT, 'libs', d, 'package.json'))
);

for (const lib of libDirs) {
  if (lib.startsWith('shared-')) HEAVY_COUNTS[`libs/${lib}`] = 25 + Math.floor(Math.random() * 15);
  else if (lib.includes('feature')) HEAVY_COUNTS[`libs/${lib}`] = 10 + Math.floor(Math.random() * 15);
  else if (lib.includes('ui-')) HEAVY_COUNTS[`libs/${lib}`] = 15 + Math.floor(Math.random() * 10);
  else HEAVY_COUNTS[`libs/${lib}`] = 5 + Math.floor(Math.random() * 10);
}

HEAVY_COUNTS['apps/app1'] = 120;
HEAVY_COUNTS['apps/app2'] = 30;
HEAVY_COUNTS['apps/app3'] = 60;
HEAVY_COUNTS['apps/app4'] = 100;

console.log('');
console.log('🔥 Generating heavy type-computation files...');
console.log('');

let total = 0;
for (const [path, count] of Object.entries(HEAVY_COUNTS)) {
  const fullPath = join(ROOT, path);
  if (!existsSync(fullPath)) continue;
  const prefix = toPascalCase(path.split('/').pop()!);
  const generated = generateHeavyFiles(fullPath, count, prefix);
  total += generated;
  process.stdout.write(`   ${path}: ${generated} heavy files\n`);
}

console.log('');
console.log(`✅ Generated ${total} heavy type files`);

// Count total
const totalTS = parseInt(require('child_process').execSync(
  `find ${join(ROOT, 'libs')} ${join(ROOT, 'apps')} -name "*.ts" -not -path "*/node_modules/*" | wc -l`
).toString().trim());
console.log(`📊 Total TS files in workspace: ${totalTS}`);
console.log('');
