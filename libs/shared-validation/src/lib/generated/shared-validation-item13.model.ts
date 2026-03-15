export enum SharedValidationItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedValidationItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedValidationItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedValidationItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedValidationItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedValidationItem13Status;
  enabled: SharedValidationItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedValidationItem13ListResponse {
  items: ISharedValidationItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedValidationItem13Filter {
  query?: string;
  status?: SharedValidationItem13Status[];
  type?: SharedValidationItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedValidationItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedValidationItem13(data: Partial<ISharedValidationItem13> = {}): ISharedValidationItem13 {
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
  } as ISharedValidationItem13;
}

export function validateSharedValidationItem13(entity: ISharedValidationItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedValidationItem13(entity: ISharedValidationItem13): ISharedValidationItem13 {
  return { ...entity };
}