export enum SharedEventsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem8Status;
  enabled: SharedEventsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedEventsItem8Status;
  category?: SharedEventsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedEventsItem8ListResponse {
  items: ISharedEventsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem8Filter {
  query?: string;
  status?: SharedEventsItem8Status[];
  type?: SharedEventsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedEventsItem8(data: Partial<ISharedEventsItem8> = {}): ISharedEventsItem8 {
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
  } as ISharedEventsItem8;
}

export function validateSharedEventsItem8(entity: ISharedEventsItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedEventsItem8(entity: ISharedEventsItem8): ISharedEventsItem8 {
  return { ...entity };
}