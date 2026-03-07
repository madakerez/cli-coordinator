export enum SharedUiItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem8Status;
  enabled: SharedUiItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedUiItem8Status;
  category?: SharedUiItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedUiItem8ListResponse {
  items: ISharedUiItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem8Filter {
  query?: string;
  status?: SharedUiItem8Status[];
  type?: SharedUiItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedUiItem8(data: Partial<ISharedUiItem8> = {}): ISharedUiItem8 {
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
  } as ISharedUiItem8;
}

export function validateSharedUiItem8(entity: ISharedUiItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedUiItem8(entity: ISharedUiItem8): ISharedUiItem8 {
  return { ...entity };
}