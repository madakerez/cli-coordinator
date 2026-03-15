export enum SharedQueueItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem2Status;
  enabled: SharedQueueItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedQueueItem2ListResponse {
  items: ISharedQueueItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem2Filter {
  query?: string;
  status?: SharedQueueItem2Status[];
  type?: SharedQueueItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem2;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem2(data: Partial<ISharedQueueItem2> = {}): ISharedQueueItem2 {
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
  } as ISharedQueueItem2;
}

export function validateSharedQueueItem2(entity: ISharedQueueItem2): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem2(entity: ISharedQueueItem2): ISharedQueueItem2 {
  return { ...entity };
}