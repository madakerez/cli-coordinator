export enum SharedI18nItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedI18nItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedI18nItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedI18nItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedI18nItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedI18nItem6Status;
  enabled: SharedI18nItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedI18nItem6Status;
  category?: SharedI18nItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedI18nItem6ListResponse {
  items: ISharedI18nItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedI18nItem6Filter {
  query?: string;
  status?: SharedI18nItem6Status[];
  type?: SharedI18nItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedI18nItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedI18nItem6(data: Partial<ISharedI18nItem6> = {}): ISharedI18nItem6 {
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
  } as ISharedI18nItem6;
}

export function validateSharedI18nItem6(entity: ISharedI18nItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedI18nItem6(entity: ISharedI18nItem6): ISharedI18nItem6 {
  return { ...entity };
}