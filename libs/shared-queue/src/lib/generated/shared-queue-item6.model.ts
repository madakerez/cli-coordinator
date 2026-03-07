export enum SharedQueueItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem6Status;
  enabled: SharedQueueItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem6Status;
  category?: SharedQueueItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedQueueItem6ListResponse {
  items: ISharedQueueItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem6Filter {
  query?: string;
  status?: SharedQueueItem6Status[];
  type?: SharedQueueItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem6(data: Partial<ISharedQueueItem6> = {}): ISharedQueueItem6 {
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
  } as ISharedQueueItem6;
}

export function validateSharedQueueItem6(entity: ISharedQueueItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem6(entity: ISharedQueueItem6): ISharedQueueItem6 {
  return { ...entity };
}