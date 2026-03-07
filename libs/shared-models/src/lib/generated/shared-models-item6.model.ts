export enum SharedModelsItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedModelsItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedModelsItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedModelsItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedModelsItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedModelsItem6Status;
  enabled: SharedModelsItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedModelsItem6Status;
  category?: SharedModelsItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedModelsItem6ListResponse {
  items: ISharedModelsItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedModelsItem6Filter {
  query?: string;
  status?: SharedModelsItem6Status[];
  type?: SharedModelsItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedModelsItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedModelsItem6(data: Partial<ISharedModelsItem6> = {}): ISharedModelsItem6 {
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
  } as ISharedModelsItem6;
}

export function validateSharedModelsItem6(entity: ISharedModelsItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedModelsItem6(entity: ISharedModelsItem6): ISharedModelsItem6 {
  return { ...entity };
}