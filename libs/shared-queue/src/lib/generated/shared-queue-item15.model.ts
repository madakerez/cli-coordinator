export enum SharedQueueItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem15Status;
  enabled: SharedQueueItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem15Status;
}

export interface ISharedQueueItem15ListResponse {
  items: ISharedQueueItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem15Filter {
  query?: string;
  status?: SharedQueueItem15Status[];
  type?: SharedQueueItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem15;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem15(data: Partial<ISharedQueueItem15> = {}): ISharedQueueItem15 {
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
  } as ISharedQueueItem15;
}

export function validateSharedQueueItem15(entity: ISharedQueueItem15): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem15(entity: ISharedQueueItem15): ISharedQueueItem15 {
  return { ...entity };
}