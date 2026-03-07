export enum SharedStorageItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedStorageItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedStorageItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedStorageItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedStorageItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedStorageItem13Status;
  enabled: SharedStorageItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedStorageItem13ListResponse {
  items: ISharedStorageItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedStorageItem13Filter {
  query?: string;
  status?: SharedStorageItem13Status[];
  type?: SharedStorageItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedStorageItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedStorageItem13(data: Partial<ISharedStorageItem13> = {}): ISharedStorageItem13 {
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
  } as ISharedStorageItem13;
}

export function validateSharedStorageItem13(entity: ISharedStorageItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedStorageItem13(entity: ISharedStorageItem13): ISharedStorageItem13 {
  return { ...entity };
}