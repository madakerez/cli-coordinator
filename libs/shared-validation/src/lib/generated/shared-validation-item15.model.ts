export enum SharedValidationItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedValidationItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedValidationItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedValidationItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedValidationItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedValidationItem15Status;
  enabled: SharedValidationItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedValidationItem15Status;
}

export interface ISharedValidationItem15ListResponse {
  items: ISharedValidationItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedValidationItem15Filter {
  query?: string;
  status?: SharedValidationItem15Status[];
  type?: SharedValidationItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedValidationItem15;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedValidationItem15(data: Partial<ISharedValidationItem15> = {}): ISharedValidationItem15 {
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
  } as ISharedValidationItem15;
}

export function validateSharedValidationItem15(entity: ISharedValidationItem15): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedValidationItem15(entity: ISharedValidationItem15): ISharedValidationItem15 {
  return { ...entity };
}