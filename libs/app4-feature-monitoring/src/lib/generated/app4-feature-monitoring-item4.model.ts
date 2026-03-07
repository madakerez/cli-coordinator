export enum App4FeatureMonitoringItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureMonitoringItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureMonitoringItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureMonitoringItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureMonitoringItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureMonitoringItem4Status;
  enabled: App4FeatureMonitoringItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4FeatureMonitoringItem4Status;
  category?: App4FeatureMonitoringItem4Type;
}

export interface IApp4FeatureMonitoringItem4ListResponse {
  items: IApp4FeatureMonitoringItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureMonitoringItem4Filter {
  query?: string;
  status?: App4FeatureMonitoringItem4Status[];
  type?: App4FeatureMonitoringItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureMonitoringItem4;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4FeatureMonitoringItem4(data: Partial<IApp4FeatureMonitoringItem4> = {}): IApp4FeatureMonitoringItem4 {
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
  } as IApp4FeatureMonitoringItem4;
}

export function validateApp4FeatureMonitoringItem4(entity: IApp4FeatureMonitoringItem4): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4FeatureMonitoringItem4(entity: IApp4FeatureMonitoringItem4): IApp4FeatureMonitoringItem4 {
  return { ...entity };
}