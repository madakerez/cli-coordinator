export enum SharedMetricsItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedMetricsItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedMetricsItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedMetricsItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedMetricsItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedMetricsItem4Status;
  enabled: SharedMetricsItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedMetricsItem4Status;
  category?: SharedMetricsItem4Type;
}

export interface ISharedMetricsItem4ListResponse {
  items: ISharedMetricsItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedMetricsItem4Filter {
  query?: string;
  status?: SharedMetricsItem4Status[];
  type?: SharedMetricsItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedMetricsItem4;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedMetricsItem4(data: Partial<ISharedMetricsItem4> = {}): ISharedMetricsItem4 {
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
  } as ISharedMetricsItem4;
}

export function validateSharedMetricsItem4(entity: ISharedMetricsItem4): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedMetricsItem4(entity: ISharedMetricsItem4): ISharedMetricsItem4 {
  return { ...entity };
}