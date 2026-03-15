export enum SharedAnalyticsItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem4Status;
  enabled: SharedAnalyticsItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedAnalyticsItem4Status;
  category?: SharedAnalyticsItem4Type;
}

export interface ISharedAnalyticsItem4ListResponse {
  items: ISharedAnalyticsItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem4Filter {
  query?: string;
  status?: SharedAnalyticsItem4Status[];
  type?: SharedAnalyticsItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem4;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedAnalyticsItem4(data: Partial<ISharedAnalyticsItem4> = {}): ISharedAnalyticsItem4 {
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
  } as ISharedAnalyticsItem4;
}

export function validateSharedAnalyticsItem4(entity: ISharedAnalyticsItem4): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedAnalyticsItem4(entity: ISharedAnalyticsItem4): ISharedAnalyticsItem4 {
  return { ...entity };
}