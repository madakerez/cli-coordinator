export enum SharedMetricsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedMetricsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedMetricsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedMetricsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedMetricsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedMetricsItem8Status;
  enabled: SharedMetricsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedMetricsItem8Status;
  category?: SharedMetricsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedMetricsItem8ListResponse {
  items: ISharedMetricsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedMetricsItem8Filter {
  query?: string;
  status?: SharedMetricsItem8Status[];
  type?: SharedMetricsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedMetricsItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedMetricsItem8(data: Partial<ISharedMetricsItem8> = {}): ISharedMetricsItem8 {
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
  } as ISharedMetricsItem8;
}

export function validateSharedMetricsItem8(entity: ISharedMetricsItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedMetricsItem8(entity: ISharedMetricsItem8): ISharedMetricsItem8 {
  return { ...entity };
}