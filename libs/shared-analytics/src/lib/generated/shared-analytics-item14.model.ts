export enum SharedAnalyticsItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem14Status;
  enabled: SharedAnalyticsItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedAnalyticsItem14ListResponse {
  items: ISharedAnalyticsItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem14Filter {
  query?: string;
  status?: SharedAnalyticsItem14Status[];
  type?: SharedAnalyticsItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem14;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedAnalyticsItem14(data: Partial<ISharedAnalyticsItem14> = {}): ISharedAnalyticsItem14 {
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
  } as ISharedAnalyticsItem14;
}

export function validateSharedAnalyticsItem14(entity: ISharedAnalyticsItem14): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedAnalyticsItem14(entity: ISharedAnalyticsItem14): ISharedAnalyticsItem14 {
  return { ...entity };
}