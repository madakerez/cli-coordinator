export enum SharedUiItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem15Status;
  enabled: SharedUiItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedUiItem15Status;
}

export interface ISharedUiItem15ListResponse {
  items: ISharedUiItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem15Filter {
  query?: string;
  status?: SharedUiItem15Status[];
  type?: SharedUiItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem15;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedUiItem15(data: Partial<ISharedUiItem15> = {}): ISharedUiItem15 {
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
  } as ISharedUiItem15;
}

export function validateSharedUiItem15(entity: ISharedUiItem15): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedUiItem15(entity: ISharedUiItem15): ISharedUiItem15 {
  return { ...entity };
}