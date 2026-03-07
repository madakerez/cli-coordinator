export enum SharedAnalyticsItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem2Status;
  enabled: SharedAnalyticsItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedAnalyticsItem2ListResponse {
  items: ISharedAnalyticsItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem2Filter {
  query?: string;
  status?: SharedAnalyticsItem2Status[];
  type?: SharedAnalyticsItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem2;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedAnalyticsItem2(data: Partial<ISharedAnalyticsItem2> = {}): ISharedAnalyticsItem2 {
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
  } as ISharedAnalyticsItem2;
}

export function validateSharedAnalyticsItem2(entity: ISharedAnalyticsItem2): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedAnalyticsItem2(entity: ISharedAnalyticsItem2): ISharedAnalyticsItem2 {
  return { ...entity };
}