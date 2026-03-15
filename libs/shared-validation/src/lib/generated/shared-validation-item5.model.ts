export enum SharedValidationItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedValidationItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedValidationItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedValidationItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedValidationItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedValidationItem5Status;
  enabled: SharedValidationItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedValidationItem5Status;
  category?: SharedValidationItem5Type;
  tags?: string;
}

export interface ISharedValidationItem5ListResponse {
  items: ISharedValidationItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedValidationItem5Filter {
  query?: string;
  status?: SharedValidationItem5Status[];
  type?: SharedValidationItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedValidationItem5;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedValidationItem5(data: Partial<ISharedValidationItem5> = {}): ISharedValidationItem5 {
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
  } as ISharedValidationItem5;
}

export function validateSharedValidationItem5(entity: ISharedValidationItem5): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedValidationItem5(entity: ISharedValidationItem5): ISharedValidationItem5 {
  return { ...entity };
}