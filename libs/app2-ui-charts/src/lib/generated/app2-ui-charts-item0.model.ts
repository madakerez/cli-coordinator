export enum App2UiChartsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UiChartsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UiChartsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UiChartsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UiChartsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UiChartsItem0Status;
  enabled: App2UiChartsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UiChartsItem0ListResponse {
  items: IApp2UiChartsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UiChartsItem0Filter {
  query?: string;
  status?: App2UiChartsItem0Status[];
  type?: App2UiChartsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UiChartsItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp2UiChartsItem0(data: Partial<IApp2UiChartsItem0> = {}): IApp2UiChartsItem0 {
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
  } as IApp2UiChartsItem0;
}

export function validateApp2UiChartsItem0(entity: IApp2UiChartsItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp2UiChartsItem0(entity: IApp2UiChartsItem0): IApp2UiChartsItem0 {
  return { ...entity };
}