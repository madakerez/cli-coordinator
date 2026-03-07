export enum SharedQueueItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem4Status;
  enabled: SharedQueueItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem4Status;
  category?: SharedQueueItem4Type;
}

export interface ISharedQueueItem4ListResponse {
  items: ISharedQueueItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem4Filter {
  query?: string;
  status?: SharedQueueItem4Status[];
  type?: SharedQueueItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem4;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem4(data: Partial<ISharedQueueItem4> = {}): ISharedQueueItem4 {
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
  } as ISharedQueueItem4;
}

export function validateSharedQueueItem4(entity: ISharedQueueItem4): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem4(entity: ISharedQueueItem4): ISharedQueueItem4 {
  return { ...entity };
}