export enum SharedConfigItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedConfigItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedConfigItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedConfigItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedConfigItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedConfigItem8Status;
  enabled: SharedConfigItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedConfigItem8Status;
  category?: SharedConfigItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedConfigItem8ListResponse {
  items: ISharedConfigItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedConfigItem8Filter {
  query?: string;
  status?: SharedConfigItem8Status[];
  type?: SharedConfigItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedConfigItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedConfigItem8(data: Partial<ISharedConfigItem8> = {}): ISharedConfigItem8 {
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
  } as ISharedConfigItem8;
}

export function validateSharedConfigItem8(entity: ISharedConfigItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedConfigItem8(entity: ISharedConfigItem8): ISharedConfigItem8 {
  return { ...entity };
}