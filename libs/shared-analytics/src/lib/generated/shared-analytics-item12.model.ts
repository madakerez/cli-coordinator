export enum SharedAnalyticsItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem12Status;
  enabled: SharedAnalyticsItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedAnalyticsItem12ListResponse {
  items: ISharedAnalyticsItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem12Filter {
  query?: string;
  status?: SharedAnalyticsItem12Status[];
  type?: SharedAnalyticsItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem12;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedAnalyticsItem12(data: Partial<ISharedAnalyticsItem12> = {}): ISharedAnalyticsItem12 {
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
  } as ISharedAnalyticsItem12;
}

export function validateSharedAnalyticsItem12(entity: ISharedAnalyticsItem12): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedAnalyticsItem12(entity: ISharedAnalyticsItem12): ISharedAnalyticsItem12 {
  return { ...entity };
}