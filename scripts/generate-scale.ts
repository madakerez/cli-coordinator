/**
 * Generate large-scale mock app content to simulate real-world monorepo size.
 * Based on Recruitee scale: 151 libs, 10 apps, ~10K TS files total.
 *
 * Generates realistic TS files (services, models, utils, components)
 * inside existing libs and apps to make builds genuinely heavy.
 */
import { mkdirSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

const ROOT = join(__dirname, '..');

// --- File templates ---

function modelFile(name: string, index: number): string {
  const fields = Array.from({ length: 8 + (index % 12) }, (_, i) => {
    const types = ['string', 'number', 'boolean', 'Date', `${name}Status`, `${name}Type`];
    return `  ${['id', 'name', 'label', 'value', 'count', 'enabled', 'createdAt', 'updatedAt', 'description', 'metadata', 'priority', 'category', 'tags', 'config', 'options', 'parentId', 'ownerId', 'status'][i % 18]}${i > 5 ? '?' : ''}: ${types[i % types.length]};`;
  });

  return `
export enum ${name}Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum ${name}Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface ${name}Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface ${name}Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface I${name} {
${fields.join('\n')}
}

export interface I${name}ListResponse {
  items: I${name}[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface I${name}Filter {
  query?: string;
  status?: ${name}Status[];
  type?: ${name}Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof I${name};
  sortOrder?: 'asc' | 'desc';
}

export class ${name}Model implements I${name} {
${fields.map(f => f.replace('?:', ':').replace(';', ' = undefined as any;')).join('\n')}

  constructor(data?: Partial<I${name}>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): I${name} {
    return { ...this } as I${name};
  }

  clone(): ${name}Model {
    return new ${name}Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}
`.trim();
}

function serviceFile(name: string, models: string[]): string {
  const imports = models.slice(0, 3).map(m =>
    `import { I${m}, ${m}Model, ${m}Status, ${m}Filter } from './${toFileName(m)}.model';`
  ).join('\n');

  return `
${imports}

export interface ${name}ServiceConfig {
  baseUrl: string;
  apiKey: string;
  timeout: number;
  retryAttempts: number;
}

export interface ${name}CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
  key: string;
}

export class ${name}Service {
  private cache = new Map<string, ${name}CacheEntry<unknown>>();
  private requestQueue: Array<() => Promise<void>> = [];
  private processing = false;

  constructor(private config: ${name}ServiceConfig) {}

  private getCacheKey(method: string, params: Record<string, unknown>): string {
    return \`\${method}:\${JSON.stringify(params)}\`;
  }

  private getCached<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }
    return entry.data as T;
  }

  private setCache<T>(key: string, data: T, ttl = 60000): void {
    this.cache.set(key, { data, timestamp: Date.now(), ttl, key });
    if (this.cache.size > 1000) {
      const oldest = [...this.cache.entries()].sort((a, b) => a[1].timestamp - b[1].timestamp);
      for (let i = 0; i < 100; i++) this.cache.delete(oldest[i][0]);
    }
  }

  async processQueue(): Promise<void> {
    if (this.processing) return;
    this.processing = true;
    while (this.requestQueue.length > 0) {
      const task = this.requestQueue.shift();
      if (task) await task();
    }
    this.processing = false;
  }

  clearCache(): void {
    this.cache.clear();
  }

  getCacheStats(): { size: number; hitRate: number } {
    return { size: this.cache.size, hitRate: 0 };
  }

  async healthCheck(): Promise<{ status: string; latency: number }> {
    const start = Date.now();
    return { status: 'ok', latency: Date.now() - start };
  }
}
`.trim();
}

function utilFile(name: string, index: number): string {
  return `
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Nullable<T> = T | null | undefined;

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}

export function throttle<T extends (...args: any[]) => any>(fn: T, limit: number): T {
  let lastCall = 0;
  return ((...args: any[]) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn(...args);
    }
  }) as T;
}

export function deepMerge<T extends Record<string, any>>(target: T, ...sources: Partial<T>[]): T {
  for (const source of sources) {
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        target[key] = deepMerge(target[key] || {} as any, source[key] as any);
      } else {
        (target as any)[key] = source[key];
      }
    }
  }
  return target;
}

export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((acc, item) => {
    const k = String(item[key]);
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

export function uniqueBy<T>(arr: T[], key: keyof T): T[] {
  const seen = new Set();
  return arr.filter(item => {
    const k = item[key];
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function flattenObject(obj: Record<string, any>, prefix = ''): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? \`\${prefix}.\${key}\` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

export function retry<T>(fn: () => Promise<T>, attempts: number, delay: number): Promise<T> {
  return fn().catch(err => {
    if (attempts <= 1) throw err;
    return new Promise(r => setTimeout(r, delay)).then(() => retry(fn, attempts - 1, delay * 2));
  });
}

export function createEnum<T extends string>(values: T[]): { [K in T]: K } {
  return values.reduce((acc, v) => ({ ...acc, [v]: v }), {} as { [K in T]: K });
}

export const ${name}Constants = {
  MAX_ITEMS: ${100 + index * 50},
  DEFAULT_PAGE_SIZE: ${10 + index % 5 * 5},
  CACHE_TTL: ${30000 + index * 1000},
  API_VERSION: 'v${1 + index % 3}',
  FEATURE_FLAGS: {
    enableBeta: ${index % 2 === 0},
    enableAnalytics: ${index % 3 === 0},
    enableExport: true,
  },
} as const;
`.trim();
}

function componentFile(name: string, index: number): string {
  return `
export interface ${name}Props {
  id: string;
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: (id: string) => void;
  onHover?: (id: string) => void;
  onChange?: (value: unknown) => void;
}

export interface ${name}State {
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
  selectedIndex: number;
  searchQuery: string;
  items: Array<{ id: string; label: string; value: unknown }>;
  filters: Record<string, unknown>;
}

export class ${name}Controller {
  private state: ${name}State = {
    isOpen: false,
    isLoading: false,
    error: null,
    selectedIndex: -1,
    searchQuery: '',
    items: [],
    filters: {},
  };

  private listeners = new Set<(state: ${name}State) => void>();

  getState(): Readonly<${name}State> {
    return { ...this.state };
  }

  subscribe(listener: (state: ${name}State) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private emit(): void {
    const snapshot = this.getState();
    this.listeners.forEach(fn => fn(snapshot));
  }

  open(): void {
    this.state = { ...this.state, isOpen: true };
    this.emit();
  }

  close(): void {
    this.state = { ...this.state, isOpen: false, searchQuery: '' };
    this.emit();
  }

  toggle(): void {
    this.state.isOpen ? this.close() : this.open();
  }

  setLoading(loading: boolean): void {
    this.state = { ...this.state, isLoading: loading };
    this.emit();
  }

  setError(error: string | null): void {
    this.state = { ...this.state, error, isLoading: false };
    this.emit();
  }

  setSearch(query: string): void {
    this.state = { ...this.state, searchQuery: query };
    this.emit();
  }

  selectIndex(index: number): void {
    this.state = { ...this.state, selectedIndex: index };
    this.emit();
  }

  setItems(items: ${name}State['items']): void {
    this.state = { ...this.state, items, isLoading: false };
    this.emit();
  }

  updateFilter(key: string, value: unknown): void {
    this.state = {
      ...this.state,
      filters: { ...this.state.filters, [key]: value },
    };
    this.emit();
  }

  reset(): void {
    this.state = {
      isOpen: false,
      isLoading: false,
      error: null,
      selectedIndex: -1,
      searchQuery: '',
      items: [],
      filters: {},
    };
    this.emit();
  }

  destroy(): void {
    this.listeners.clear();
  }
}

export function create${name}(props: ${name}Props): ${name}Controller {
  const controller = new ${name}Controller();
  if (props.loading) controller.setLoading(true);
  return controller;
}
`.trim();
}

function handlerFile(name: string, index: number): string {
  return `
export interface ${name}Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface ${name}Handler {
  canHandle(event: ${name}Event): boolean;
  handle(event: ${name}Event): Promise<void>;
  priority: number;
}

export class ${name}EventBus {
  private handlers: ${name}Handler[] = [];
  private history: ${name}Event[] = [];
  private maxHistory = ${100 + index * 10};

  register(handler: ${name}Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: ${name}Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<${name}Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function create${name}Handler(
  type: string,
  fn: (event: ${name}Event) => Promise<void>,
  priority = 0
): ${name}Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}
`.trim();
}

// --- Helpers ---

function toFileName(name: string): string {
  return name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

function toPascalCase(str: string): string {
  return str.split(/[-_]/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function generateFilesForProject(projectDir: string, fileCount: number, projectName: string) {
  const srcDir = join(projectDir, 'src', 'lib', 'generated');
  mkdirSync(srcDir, { recursive: true });

  const pascal = toPascalCase(projectName);
  const modelNames: string[] = [];
  const generatedFiles: string[] = [];

  // Distribute file types: 30% models, 20% services, 20% utils, 20% components, 10% handlers
  const modelCount = Math.floor(fileCount * 0.3);
  const serviceCount = Math.floor(fileCount * 0.2);
  const utilCount = Math.floor(fileCount * 0.2);
  const componentCount = Math.floor(fileCount * 0.2);
  const handlerCount = fileCount - modelCount - serviceCount - utilCount - componentCount;

  for (let i = 0; i < modelCount; i++) {
    const name = `${pascal}Item${i}`;
    modelNames.push(name);
    const fileName = `${toFileName(name)}.model.ts`;
    writeFileSync(join(srcDir, fileName), modelFile(name, i));
    generatedFiles.push(fileName);
  }

  for (let i = 0; i < serviceCount; i++) {
    const name = `${pascal}Svc${i}`;
    const fileName = `${toFileName(name)}.service.ts`;
    const deps = modelNames.slice(i % modelNames.length, (i % modelNames.length) + 3);
    writeFileSync(join(srcDir, fileName), serviceFile(name, deps.length > 0 ? deps : [modelNames[0] || pascal]));
    generatedFiles.push(fileName);
  }

  for (let i = 0; i < utilCount; i++) {
    const name = `${pascal}Util${i}`;
    const fileName = `${toFileName(name)}.utils.ts`;
    writeFileSync(join(srcDir, fileName), utilFile(name, i));
    generatedFiles.push(fileName);
  }

  for (let i = 0; i < componentCount; i++) {
    const name = `${pascal}Widget${i}`;
    const fileName = `${toFileName(name)}.component.ts`;
    writeFileSync(join(srcDir, fileName), componentFile(name, i));
    generatedFiles.push(fileName);
  }

  for (let i = 0; i < handlerCount; i++) {
    const name = `${pascal}Handler${i}`;
    const fileName = `${toFileName(name)}.handler.ts`;
    writeFileSync(join(srcDir, fileName), handlerFile(name, i));
    generatedFiles.push(fileName);
  }

  // Generate barrel export
  const barrel = generatedFiles.map(f => `export * from './${f.replace('.ts', '')}';`).join('\n');
  writeFileSync(join(srcDir, 'index.ts'), barrel + '\n');

  return generatedFiles.length;
}

// --- Main ---

// Scale targets based on Recruitee analysis
const LIB_SCALE: Record<string, number> = {};
const APP_SCALE: Record<string, number> = {
  'app1': 400,   // ~recruitee-like main app features
  'app2': 80,    // small app (like browser-extension)
  'app3': 200,   // medium (like tellent)
  'app4': 300,   // large (like viewbox+referrals+onboarding combined)
};

// Assign file counts to libs based on name patterns (matching Recruitee distribution)
const libDirs = readdirSync(join(ROOT, 'libs')).filter(d =>
  existsSync(join(ROOT, 'libs', d, 'package.json'))
);

// Large libs (like user-interface, integrations, reports)
const largePrefixes = ['shared-', 'app4-ui', 'app1-feature'];
const medPrefixes = ['app4-feature', 'app3-feature', 'app1-data'];
const smallPrefixes = ['app2-', 'app3-data', 'app4-data', 'app1-ui'];

for (const lib of libDirs) {
  if (largePrefixes.some(p => lib.startsWith(p))) {
    LIB_SCALE[lib] = 40 + Math.floor(Math.random() * 30); // 40-70 files
  } else if (medPrefixes.some(p => lib.startsWith(p))) {
    LIB_SCALE[lib] = 15 + Math.floor(Math.random() * 20); // 15-35 files
  } else if (smallPrefixes.some(p => lib.startsWith(p))) {
    LIB_SCALE[lib] = 5 + Math.floor(Math.random() * 10);  // 5-15 files
  } else {
    LIB_SCALE[lib] = 8 + Math.floor(Math.random() * 15);  // 8-23 files
  }
}

console.log('');
console.log('🏗️  Generating large-scale mock content...');
console.log(`   ${libDirs.length} libs, ${Object.keys(APP_SCALE).length} apps`);
console.log('');

let totalFiles = 0;

// Generate lib files
for (const [lib, count] of Object.entries(LIB_SCALE)) {
  const dir = join(ROOT, 'libs', lib);
  if (!existsSync(dir)) continue;
  const generated = generateFilesForProject(dir, count, lib);
  totalFiles += generated;
  process.stdout.write(`   📦 ${lib}: ${generated} files\n`);
}

// Generate app files
for (const [app, count] of Object.entries(APP_SCALE)) {
  const dir = join(ROOT, 'apps', app);
  if (!existsSync(dir)) continue;
  const generated = generateFilesForProject(dir, count, app);
  totalFiles += generated;
  process.stdout.write(`   🚀 ${app}: ${generated} files\n`);
}

console.log('');
console.log(`✅ Generated ${totalFiles} TypeScript files`);
console.log('');
