export enum SharedQueueItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem12Status;
  enabled: SharedQueueItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedQueueItem12ListResponse {
  items: ISharedQueueItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem12Filter {
  query?: string;
  status?: SharedQueueItem12Status[];
  type?: SharedQueueItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem12;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem12(data: Partial<ISharedQueueItem12> = {}): ISharedQueueItem12 {
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
  } as ISharedQueueItem12;
}

export function validateSharedQueueItem12(entity: ISharedQueueItem12): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem12(entity: ISharedQueueItem12): ISharedQueueItem12 {
  return { ...entity };
}