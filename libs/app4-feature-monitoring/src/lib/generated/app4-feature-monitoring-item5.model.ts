export enum App4FeatureMonitoringItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureMonitoringItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureMonitoringItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureMonitoringItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureMonitoringItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureMonitoringItem5Status;
  enabled: App4FeatureMonitoringItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4FeatureMonitoringItem5Status;
  category?: App4FeatureMonitoringItem5Type;
  tags?: string;
}

export interface IApp4FeatureMonitoringItem5ListResponse {
  items: IApp4FeatureMonitoringItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureMonitoringItem5Filter {
  query?: string;
  status?: App4FeatureMonitoringItem5Status[];
  type?: App4FeatureMonitoringItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureMonitoringItem5;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4FeatureMonitoringItem5(data: Partial<IApp4FeatureMonitoringItem5> = {}): IApp4FeatureMonitoringItem5 {
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
  } as IApp4FeatureMonitoringItem5;
}

export function validateApp4FeatureMonitoringItem5(entity: IApp4FeatureMonitoringItem5): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4FeatureMonitoringItem5(entity: IApp4FeatureMonitoringItem5): IApp4FeatureMonitoringItem5 {
  return { ...entity };
}