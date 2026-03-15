export enum SharedEventsItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem13Status;
  enabled: SharedEventsItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedEventsItem13ListResponse {
  items: ISharedEventsItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem13Filter {
  query?: string;
  status?: SharedEventsItem13Status[];
  type?: SharedEventsItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedEventsItem13(data: Partial<ISharedEventsItem13> = {}): ISharedEventsItem13 {
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
  } as ISharedEventsItem13;
}

export function validateSharedEventsItem13(entity: ISharedEventsItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedEventsItem13(entity: ISharedEventsItem13): ISharedEventsItem13 {
  return { ...entity };
}