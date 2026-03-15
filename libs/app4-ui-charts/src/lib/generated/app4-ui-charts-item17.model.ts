export enum App4UiChartsItem17Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiChartsItem17Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiChartsItem17Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiChartsItem17Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiChartsItem17 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiChartsItem17Status;
  enabled: App4UiChartsItem17Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiChartsItem17Status;
  category?: App4UiChartsItem17Type;
  tags?: string;
}

export interface IApp4UiChartsItem17ListResponse {
  items: IApp4UiChartsItem17[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiChartsItem17Filter {
  query?: string;
  status?: App4UiChartsItem17Status[];
  type?: App4UiChartsItem17Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiChartsItem17;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiChartsItem17(data: Partial<IApp4UiChartsItem17> = {}): IApp4UiChartsItem17 {
  return {
    id: '',
    name: '',
    label: '',
    value: 0,
    count: 0,
    enabled: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...data,
  } as IApp4UiChartsItem17;
}

export function validateApp4UiChartsItem17(entity: IApp4UiChartsItem17): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiChartsItem17(entity: IApp4UiChartsItem17): IApp4UiChartsItem17 {
  return { ...entity };
}