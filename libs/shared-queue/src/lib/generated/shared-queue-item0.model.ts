export enum SharedQueueItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem0Status;
  enabled: SharedQueueItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedQueueItem0ListResponse {
  items: ISharedQueueItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem0Filter {
  query?: string;
  status?: SharedQueueItem0Status[];
  type?: SharedQueueItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem0(data: Partial<ISharedQueueItem0> = {}): ISharedQueueItem0 {
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
  } as ISharedQueueItem0;
}

export function validateSharedQueueItem0(entity: ISharedQueueItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem0(entity: ISharedQueueItem0): ISharedQueueItem0 {
  return { ...entity };
}