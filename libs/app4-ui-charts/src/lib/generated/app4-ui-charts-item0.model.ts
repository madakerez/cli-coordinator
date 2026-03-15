export enum App4UiChartsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiChartsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiChartsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiChartsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiChartsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiChartsItem0Status;
  enabled: App4UiChartsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiChartsItem0ListResponse {
  items: IApp4UiChartsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiChartsItem0Filter {
  query?: string;
  status?: App4UiChartsItem0Status[];
  type?: App4UiChartsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiChartsItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiChartsItem0(data: Partial<IApp4UiChartsItem0> = {}): IApp4UiChartsItem0 {
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
  } as IApp4UiChartsItem0;
}

export function validateApp4UiChartsItem0(entity: IApp4UiChartsItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiChartsItem0(entity: IApp4UiChartsItem0): IApp4UiChartsItem0 {
  return { ...entity };
}