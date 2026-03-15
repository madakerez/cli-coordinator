export enum SharedConfigItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedConfigItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedConfigItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedConfigItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedConfigItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedConfigItem13Status;
  enabled: SharedConfigItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedConfigItem13ListResponse {
  items: ISharedConfigItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedConfigItem13Filter {
  query?: string;
  status?: SharedConfigItem13Status[];
  type?: SharedConfigItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedConfigItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedConfigItem13(data: Partial<ISharedConfigItem13> = {}): ISharedConfigItem13 {
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
  } as ISharedConfigItem13;
}

export function validateSharedConfigItem13(entity: ISharedConfigItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedConfigItem13(entity: ISharedConfigItem13): ISharedConfigItem13 {
  return { ...entity };
}