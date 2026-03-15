export enum SharedConfigItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedConfigItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedConfigItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedConfigItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedConfigItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedConfigItem5Status;
  enabled: SharedConfigItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedConfigItem5Status;
  category?: SharedConfigItem5Type;
  tags?: string;
}

export interface ISharedConfigItem5ListResponse {
  items: ISharedConfigItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedConfigItem5Filter {
  query?: string;
  status?: SharedConfigItem5Status[];
  type?: SharedConfigItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedConfigItem5;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedConfigItem5(data: Partial<ISharedConfigItem5> = {}): ISharedConfigItem5 {
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
  } as ISharedConfigItem5;
}

export function validateSharedConfigItem5(entity: ISharedConfigItem5): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedConfigItem5(entity: ISharedConfigItem5): ISharedConfigItem5 {
  return { ...entity };
}