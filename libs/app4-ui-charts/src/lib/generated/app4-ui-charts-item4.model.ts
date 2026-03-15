export enum App4UiChartsItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiChartsItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiChartsItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiChartsItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiChartsItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiChartsItem4Status;
  enabled: App4UiChartsItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiChartsItem4Status;
  category?: App4UiChartsItem4Type;
}

export interface IApp4UiChartsItem4ListResponse {
  items: IApp4UiChartsItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiChartsItem4Filter {
  query?: string;
  status?: App4UiChartsItem4Status[];
  type?: App4UiChartsItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiChartsItem4;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiChartsItem4(data: Partial<IApp4UiChartsItem4> = {}): IApp4UiChartsItem4 {
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
  } as IApp4UiChartsItem4;
}

export function validateApp4UiChartsItem4(entity: IApp4UiChartsItem4): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiChartsItem4(entity: IApp4UiChartsItem4): IApp4UiChartsItem4 {
  return { ...entity };
}