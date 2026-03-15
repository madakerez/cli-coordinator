export enum SharedAnalyticsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem8Status;
  enabled: SharedAnalyticsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedAnalyticsItem8Status;
  category?: SharedAnalyticsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedAnalyticsItem8ListResponse {
  items: ISharedAnalyticsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem8Filter {
  query?: string;
  status?: SharedAnalyticsItem8Status[];
  type?: SharedAnalyticsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedAnalyticsItem8(data: Partial<ISharedAnalyticsItem8> = {}): ISharedAnalyticsItem8 {
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
  } as ISharedAnalyticsItem8;
}

export function validateSharedAnalyticsItem8(entity: ISharedAnalyticsItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedAnalyticsItem8(entity: ISharedAnalyticsItem8): ISharedAnalyticsItem8 {
  return { ...entity };
}