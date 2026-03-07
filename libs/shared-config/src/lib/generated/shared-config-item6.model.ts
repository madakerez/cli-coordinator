export enum SharedConfigItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedConfigItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedConfigItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedConfigItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedConfigItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedConfigItem6Status;
  enabled: SharedConfigItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedConfigItem6Status;
  category?: SharedConfigItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedConfigItem6ListResponse {
  items: ISharedConfigItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedConfigItem6Filter {
  query?: string;
  status?: SharedConfigItem6Status[];
  type?: SharedConfigItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedConfigItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedConfigItem6(data: Partial<ISharedConfigItem6> = {}): ISharedConfigItem6 {
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
  } as ISharedConfigItem6;
}

export function validateSharedConfigItem6(entity: ISharedConfigItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedConfigItem6(entity: ISharedConfigItem6): ISharedConfigItem6 {
  return { ...entity };
}