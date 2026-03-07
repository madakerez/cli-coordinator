export enum SharedQueueItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem8Status;
  enabled: SharedQueueItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem8Status;
  category?: SharedQueueItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedQueueItem8ListResponse {
  items: ISharedQueueItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem8Filter {
  query?: string;
  status?: SharedQueueItem8Status[];
  type?: SharedQueueItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem8(data: Partial<ISharedQueueItem8> = {}): ISharedQueueItem8 {
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
  } as ISharedQueueItem8;
}

export function validateSharedQueueItem8(entity: ISharedQueueItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem8(entity: ISharedQueueItem8): ISharedQueueItem8 {
  return { ...entity };
}