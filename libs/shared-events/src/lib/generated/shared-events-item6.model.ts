export enum SharedEventsItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem6Status;
  enabled: SharedEventsItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedEventsItem6Status;
  category?: SharedEventsItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedEventsItem6ListResponse {
  items: ISharedEventsItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem6Filter {
  query?: string;
  status?: SharedEventsItem6Status[];
  type?: SharedEventsItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedEventsItem6(data: Partial<ISharedEventsItem6> = {}): ISharedEventsItem6 {
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
  } as ISharedEventsItem6;
}

export function validateSharedEventsItem6(entity: ISharedEventsItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedEventsItem6(entity: ISharedEventsItem6): ISharedEventsItem6 {
  return { ...entity };
}