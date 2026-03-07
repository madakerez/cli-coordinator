export enum SharedMetricsItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedMetricsItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedMetricsItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedMetricsItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedMetricsItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedMetricsItem5Status;
  enabled: SharedMetricsItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedMetricsItem5Status;
  category?: SharedMetricsItem5Type;
  tags?: string;
}

export interface ISharedMetricsItem5ListResponse {
  items: ISharedMetricsItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedMetricsItem5Filter {
  query?: string;
  status?: SharedMetricsItem5Status[];
  type?: SharedMetricsItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedMetricsItem5;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedMetricsItem5(data: Partial<ISharedMetricsItem5> = {}): ISharedMetricsItem5 {
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
  } as ISharedMetricsItem5;
}

export function validateSharedMetricsItem5(entity: ISharedMetricsItem5): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedMetricsItem5(entity: ISharedMetricsItem5): ISharedMetricsItem5 {
  return { ...entity };
}