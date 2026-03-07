export enum SharedAnalyticsItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem6Status;
  enabled: SharedAnalyticsItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedAnalyticsItem6Status;
  category?: SharedAnalyticsItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedAnalyticsItem6ListResponse {
  items: ISharedAnalyticsItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem6Filter {
  query?: string;
  status?: SharedAnalyticsItem6Status[];
  type?: SharedAnalyticsItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedAnalyticsItem6(data: Partial<ISharedAnalyticsItem6> = {}): ISharedAnalyticsItem6 {
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
  } as ISharedAnalyticsItem6;
}

export function validateSharedAnalyticsItem6(entity: ISharedAnalyticsItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedAnalyticsItem6(entity: ISharedAnalyticsItem6): ISharedAnalyticsItem6 {
  return { ...entity };
}