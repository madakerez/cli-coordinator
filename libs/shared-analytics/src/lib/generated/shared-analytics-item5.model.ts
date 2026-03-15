export enum SharedAnalyticsItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem5Status;
  enabled: SharedAnalyticsItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedAnalyticsItem5Status;
  category?: SharedAnalyticsItem5Type;
  tags?: string;
}

export interface ISharedAnalyticsItem5ListResponse {
  items: ISharedAnalyticsItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem5Filter {
  query?: string;
  status?: SharedAnalyticsItem5Status[];
  type?: SharedAnalyticsItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem5;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedAnalyticsItem5(data: Partial<ISharedAnalyticsItem5> = {}): ISharedAnalyticsItem5 {
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
  } as ISharedAnalyticsItem5;
}

export function validateSharedAnalyticsItem5(entity: ISharedAnalyticsItem5): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedAnalyticsItem5(entity: ISharedAnalyticsItem5): ISharedAnalyticsItem5 {
  return { ...entity };
}