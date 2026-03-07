export enum SharedStorageItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedStorageItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedStorageItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedStorageItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedStorageItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedStorageItem5Status;
  enabled: SharedStorageItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedStorageItem5Status;
  category?: SharedStorageItem5Type;
  tags?: string;
}

export interface ISharedStorageItem5ListResponse {
  items: ISharedStorageItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedStorageItem5Filter {
  query?: string;
  status?: SharedStorageItem5Status[];
  type?: SharedStorageItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedStorageItem5;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedStorageItem5(data: Partial<ISharedStorageItem5> = {}): ISharedStorageItem5 {
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
  } as ISharedStorageItem5;
}

export function validateSharedStorageItem5(entity: ISharedStorageItem5): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedStorageItem5(entity: ISharedStorageItem5): ISharedStorageItem5 {
  return { ...entity };
}