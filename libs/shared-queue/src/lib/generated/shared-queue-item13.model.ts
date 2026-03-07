export enum SharedQueueItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem13Status;
  enabled: SharedQueueItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedQueueItem13ListResponse {
  items: ISharedQueueItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem13Filter {
  query?: string;
  status?: SharedQueueItem13Status[];
  type?: SharedQueueItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem13(data: Partial<ISharedQueueItem13> = {}): ISharedQueueItem13 {
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
  } as ISharedQueueItem13;
}

export function validateSharedQueueItem13(entity: ISharedQueueItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem13(entity: ISharedQueueItem13): ISharedQueueItem13 {
  return { ...entity };
}