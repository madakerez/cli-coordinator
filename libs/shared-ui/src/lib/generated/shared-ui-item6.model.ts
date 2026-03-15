export enum SharedUiItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem6Status;
  enabled: SharedUiItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedUiItem6Status;
  category?: SharedUiItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedUiItem6ListResponse {
  items: ISharedUiItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem6Filter {
  query?: string;
  status?: SharedUiItem6Status[];
  type?: SharedUiItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedUiItem6(data: Partial<ISharedUiItem6> = {}): ISharedUiItem6 {
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
  } as ISharedUiItem6;
}

export function validateSharedUiItem6(entity: ISharedUiItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedUiItem6(entity: ISharedUiItem6): ISharedUiItem6 {
  return { ...entity };
}