export enum SharedModelsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedModelsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedModelsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedModelsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedModelsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedModelsItem8Status;
  enabled: SharedModelsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedModelsItem8Status;
  category?: SharedModelsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedModelsItem8ListResponse {
  items: ISharedModelsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedModelsItem8Filter {
  query?: string;
  status?: SharedModelsItem8Status[];
  type?: SharedModelsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedModelsItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedModelsItem8(data: Partial<ISharedModelsItem8> = {}): ISharedModelsItem8 {
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
  } as ISharedModelsItem8;
}

export function validateSharedModelsItem8(entity: ISharedModelsItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedModelsItem8(entity: ISharedModelsItem8): ISharedModelsItem8 {
  return { ...entity };
}