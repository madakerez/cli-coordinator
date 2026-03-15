export enum SharedQueueItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem14Status;
  enabled: SharedQueueItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedQueueItem14ListResponse {
  items: ISharedQueueItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem14Filter {
  query?: string;
  status?: SharedQueueItem14Status[];
  type?: SharedQueueItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem14;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem14(data: Partial<ISharedQueueItem14> = {}): ISharedQueueItem14 {
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
  } as ISharedQueueItem14;
}

export function validateSharedQueueItem14(entity: ISharedQueueItem14): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem14(entity: ISharedQueueItem14): ISharedQueueItem14 {
  return { ...entity };
}