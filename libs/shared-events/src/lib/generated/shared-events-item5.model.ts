export enum SharedEventsItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem5Status;
  enabled: SharedEventsItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedEventsItem5Status;
  category?: SharedEventsItem5Type;
  tags?: string;
}

export interface ISharedEventsItem5ListResponse {
  items: ISharedEventsItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem5Filter {
  query?: string;
  status?: SharedEventsItem5Status[];
  type?: SharedEventsItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem5;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedEventsItem5(data: Partial<ISharedEventsItem5> = {}): ISharedEventsItem5 {
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
  } as ISharedEventsItem5;
}

export function validateSharedEventsItem5(entity: ISharedEventsItem5): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedEventsItem5(entity: ISharedEventsItem5): ISharedEventsItem5 {
  return { ...entity };
}