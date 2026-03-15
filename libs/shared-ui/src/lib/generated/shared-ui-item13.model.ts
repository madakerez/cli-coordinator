export enum SharedUiItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem13Status;
  enabled: SharedUiItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedUiItem13ListResponse {
  items: ISharedUiItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem13Filter {
  query?: string;
  status?: SharedUiItem13Status[];
  type?: SharedUiItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedUiItem13(data: Partial<ISharedUiItem13> = {}): ISharedUiItem13 {
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
  } as ISharedUiItem13;
}

export function validateSharedUiItem13(entity: ISharedUiItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedUiItem13(entity: ISharedUiItem13): ISharedUiItem13 {
  return { ...entity };
}