export enum SharedValidationItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedValidationItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedValidationItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedValidationItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedValidationItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedValidationItem6Status;
  enabled: SharedValidationItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedValidationItem6Status;
  category?: SharedValidationItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedValidationItem6ListResponse {
  items: ISharedValidationItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedValidationItem6Filter {
  query?: string;
  status?: SharedValidationItem6Status[];
  type?: SharedValidationItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedValidationItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedValidationItem6(data: Partial<ISharedValidationItem6> = {}): ISharedValidationItem6 {
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
  } as ISharedValidationItem6;
}

export function validateSharedValidationItem6(entity: ISharedValidationItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedValidationItem6(entity: ISharedValidationItem6): ISharedValidationItem6 {
  return { ...entity };
}