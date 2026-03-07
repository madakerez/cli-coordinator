export enum SharedQueueItem7Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem7Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem7Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem7Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem7 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem7Status;
  enabled: SharedQueueItem7Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem7Status;
  category?: SharedQueueItem7Type;
  tags?: string;
  config?: number;
  options?: boolean;
}

export interface ISharedQueueItem7ListResponse {
  items: ISharedQueueItem7[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem7Filter {
  query?: string;
  status?: SharedQueueItem7Status[];
  type?: SharedQueueItem7Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem7;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedQueueItem7(data: Partial<ISharedQueueItem7> = {}): ISharedQueueItem7 {
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
  } as ISharedQueueItem7;
}

export function validateSharedQueueItem7(entity: ISharedQueueItem7): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedQueueItem7(entity: ISharedQueueItem7): ISharedQueueItem7 {
  return { ...entity };
}