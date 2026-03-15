export enum SharedStorageItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedStorageItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedStorageItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedStorageItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedStorageItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedStorageItem6Status;
  enabled: SharedStorageItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedStorageItem6Status;
  category?: SharedStorageItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedStorageItem6ListResponse {
  items: ISharedStorageItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedStorageItem6Filter {
  query?: string;
  status?: SharedStorageItem6Status[];
  type?: SharedStorageItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedStorageItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedStorageItem6(data: Partial<ISharedStorageItem6> = {}): ISharedStorageItem6 {
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
  } as ISharedStorageItem6;
}

export function validateSharedStorageItem6(entity: ISharedStorageItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedStorageItem6(entity: ISharedStorageItem6): ISharedStorageItem6 {
  return { ...entity };
}