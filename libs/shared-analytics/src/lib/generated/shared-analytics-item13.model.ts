export enum SharedAnalyticsItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem13Status;
  enabled: SharedAnalyticsItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedAnalyticsItem13ListResponse {
  items: ISharedAnalyticsItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem13Filter {
  query?: string;
  status?: SharedAnalyticsItem13Status[];
  type?: SharedAnalyticsItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedAnalyticsItem13(data: Partial<ISharedAnalyticsItem13> = {}): ISharedAnalyticsItem13 {
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
  } as ISharedAnalyticsItem13;
}

export function validateSharedAnalyticsItem13(entity: ISharedAnalyticsItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedAnalyticsItem13(entity: ISharedAnalyticsItem13): ISharedAnalyticsItem13 {
  return { ...entity };
}