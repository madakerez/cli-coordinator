export enum SharedQueueItem11Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem11Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem11Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem11Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem11 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem11Status;
  enabled: SharedQueueItem11Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem11Status;
  category?: SharedQueueItem11Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: SharedQueueItem11Status;
  status?: SharedQueueItem11Type;
  id?: string;
}

export interface ISharedQueueItem11ListResponse {
  items: ISharedQueueItem11[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem11Filter {
  query?: string;
  status?: SharedQueueItem11Status[];
  type?: SharedQueueItem11Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem11;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem11(data: Partial<ISharedQueueItem11> = {}): ISharedQueueItem11 {
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
  } as ISharedQueueItem11;
}

export function validateSharedQueueItem11(entity: ISharedQueueItem11): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem11(entity: ISharedQueueItem11): ISharedQueueItem11 {
  return { ...entity };
}