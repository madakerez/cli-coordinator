export enum SharedQueueItem3Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem3Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem3Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem3Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem3 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem3Status;
  enabled: SharedQueueItem3Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem3Status;
}

export interface ISharedQueueItem3ListResponse {
  items: ISharedQueueItem3[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem3Filter {
  query?: string;
  status?: SharedQueueItem3Status[];
  type?: SharedQueueItem3Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem3;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem3(data: Partial<ISharedQueueItem3> = {}): ISharedQueueItem3 {
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
  } as ISharedQueueItem3;
}

export function validateSharedQueueItem3(entity: ISharedQueueItem3): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem3(entity: ISharedQueueItem3): ISharedQueueItem3 {
  return { ...entity };
}