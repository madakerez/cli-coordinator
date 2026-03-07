export enum SharedCacheItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedCacheItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedCacheItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedCacheItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedCacheItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedCacheItem8Status;
  enabled: SharedCacheItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedCacheItem8Status;
  category?: SharedCacheItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedCacheItem8ListResponse {
  items: ISharedCacheItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedCacheItem8Filter {
  query?: string;
  status?: SharedCacheItem8Status[];
  type?: SharedCacheItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedCacheItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedCacheItem8(data: Partial<ISharedCacheItem8> = {}): ISharedCacheItem8 {
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
  } as ISharedCacheItem8;
}

export function validateSharedCacheItem8(entity: ISharedCacheItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedCacheItem8(entity: ISharedCacheItem8): ISharedCacheItem8 {
  return { ...entity };
}