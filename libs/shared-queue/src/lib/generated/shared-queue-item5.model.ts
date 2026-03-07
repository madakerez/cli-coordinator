export enum SharedQueueItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem5Status;
  enabled: SharedQueueItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem5Status;
  category?: SharedQueueItem5Type;
  tags?: string;
}

export interface ISharedQueueItem5ListResponse {
  items: ISharedQueueItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem5Filter {
  query?: string;
  status?: SharedQueueItem5Status[];
  type?: SharedQueueItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem5;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem5(data: Partial<ISharedQueueItem5> = {}): ISharedQueueItem5 {
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
  } as ISharedQueueItem5;
}

export function validateSharedQueueItem5(entity: ISharedQueueItem5): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem5(entity: ISharedQueueItem5): ISharedQueueItem5 {
  return { ...entity };
}