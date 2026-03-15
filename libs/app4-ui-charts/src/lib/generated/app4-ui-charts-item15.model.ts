export enum App4UiChartsItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiChartsItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiChartsItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiChartsItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiChartsItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiChartsItem15Status;
  enabled: App4UiChartsItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiChartsItem15Status;
}

export interface IApp4UiChartsItem15ListResponse {
  items: IApp4UiChartsItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiChartsItem15Filter {
  query?: string;
  status?: App4UiChartsItem15Status[];
  type?: App4UiChartsItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiChartsItem15;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiChartsItem15(data: Partial<IApp4UiChartsItem15> = {}): IApp4UiChartsItem15 {
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
  } as IApp4UiChartsItem15;
}

export function validateApp4UiChartsItem15(entity: IApp4UiChartsItem15): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiChartsItem15(entity: IApp4UiChartsItem15): IApp4UiChartsItem15 {
  return { ...entity };
}