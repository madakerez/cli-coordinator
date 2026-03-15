export enum SharedQueueItem16Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem16Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem16Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem16Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem16 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem16Status;
  enabled: SharedQueueItem16Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem16Status;
  category?: SharedQueueItem16Type;
}

export interface ISharedQueueItem16ListResponse {
  items: ISharedQueueItem16[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem16Filter {
  query?: string;
  status?: SharedQueueItem16Status[];
  type?: SharedQueueItem16Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem16;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem16(data: Partial<ISharedQueueItem16> = {}): ISharedQueueItem16 {
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
  } as ISharedQueueItem16;
}

export function validateSharedQueueItem16(entity: ISharedQueueItem16): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem16(entity: ISharedQueueItem16): ISharedQueueItem16 {
  return { ...entity };
}