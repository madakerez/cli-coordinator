export enum SharedValidationItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedValidationItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedValidationItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedValidationItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedValidationItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedValidationItem8Status;
  enabled: SharedValidationItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedValidationItem8Status;
  category?: SharedValidationItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedValidationItem8ListResponse {
  items: ISharedValidationItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedValidationItem8Filter {
  query?: string;
  status?: SharedValidationItem8Status[];
  type?: SharedValidationItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedValidationItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedValidationItem8(data: Partial<ISharedValidationItem8> = {}): ISharedValidationItem8 {
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
  } as ISharedValidationItem8;
}

export function validateSharedValidationItem8(entity: ISharedValidationItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedValidationItem8(entity: ISharedValidationItem8): ISharedValidationItem8 {
  return { ...entity };
}