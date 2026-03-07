export enum SharedStorageItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedStorageItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedStorageItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedStorageItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedStorageItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedStorageItem8Status;
  enabled: SharedStorageItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedStorageItem8Status;
  category?: SharedStorageItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedStorageItem8ListResponse {
  items: ISharedStorageItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedStorageItem8Filter {
  query?: string;
  status?: SharedStorageItem8Status[];
  type?: SharedStorageItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedStorageItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedStorageItem8(data: Partial<ISharedStorageItem8> = {}): ISharedStorageItem8 {
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
  } as ISharedStorageItem8;
}

export function validateSharedStorageItem8(entity: ISharedStorageItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedStorageItem8(entity: ISharedStorageItem8): ISharedStorageItem8 {
  return { ...entity };
}