export enum SharedMetricsItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedMetricsItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedMetricsItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedMetricsItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedMetricsItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedMetricsItem6Status;
  enabled: SharedMetricsItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedMetricsItem6Status;
  category?: SharedMetricsItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedMetricsItem6ListResponse {
  items: ISharedMetricsItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedMetricsItem6Filter {
  query?: string;
  status?: SharedMetricsItem6Status[];
  type?: SharedMetricsItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedMetricsItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedMetricsItem6(data: Partial<ISharedMetricsItem6> = {}): ISharedMetricsItem6 {
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
  } as ISharedMetricsItem6;
}

export function validateSharedMetricsItem6(entity: ISharedMetricsItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedMetricsItem6(entity: ISharedMetricsItem6): ISharedMetricsItem6 {
  return { ...entity };
}