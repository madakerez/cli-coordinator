export enum SharedStorageItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedStorageItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedStorageItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedStorageItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedStorageItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedStorageItem15Status;
  enabled: SharedStorageItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedStorageItem15Status;
}

export interface ISharedStorageItem15ListResponse {
  items: ISharedStorageItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedStorageItem15Filter {
  query?: string;
  status?: SharedStorageItem15Status[];
  type?: SharedStorageItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedStorageItem15;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedStorageItem15(data: Partial<ISharedStorageItem15> = {}): ISharedStorageItem15 {
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
  } as ISharedStorageItem15;
}

export function validateSharedStorageItem15(entity: ISharedStorageItem15): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedStorageItem15(entity: ISharedStorageItem15): ISharedStorageItem15 {
  return { ...entity };
}