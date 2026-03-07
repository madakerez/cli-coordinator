export enum SharedQueueItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem1Status;
  enabled: SharedQueueItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedQueueItem1ListResponse {
  items: ISharedQueueItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem1Filter {
  query?: string;
  status?: SharedQueueItem1Status[];
  type?: SharedQueueItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem1;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem1(data: Partial<ISharedQueueItem1> = {}): ISharedQueueItem1 {
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
  } as ISharedQueueItem1;
}

export function validateSharedQueueItem1(entity: ISharedQueueItem1): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem1(entity: ISharedQueueItem1): ISharedQueueItem1 {
  return { ...entity };
}