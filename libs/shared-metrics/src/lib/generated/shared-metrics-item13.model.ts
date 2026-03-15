export enum SharedMetricsItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedMetricsItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedMetricsItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedMetricsItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedMetricsItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedMetricsItem13Status;
  enabled: SharedMetricsItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedMetricsItem13ListResponse {
  items: ISharedMetricsItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedMetricsItem13Filter {
  query?: string;
  status?: SharedMetricsItem13Status[];
  type?: SharedMetricsItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedMetricsItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedMetricsItem13(data: Partial<ISharedMetricsItem13> = {}): ISharedMetricsItem13 {
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
  } as ISharedMetricsItem13;
}

export function validateSharedMetricsItem13(entity: ISharedMetricsItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedMetricsItem13(entity: ISharedMetricsItem13): ISharedMetricsItem13 {
  return { ...entity };
}