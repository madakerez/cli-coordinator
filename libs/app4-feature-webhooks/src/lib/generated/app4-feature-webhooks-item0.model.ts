export enum App4FeatureWebhooksItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureWebhooksItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureWebhooksItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureWebhooksItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureWebhooksItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureWebhooksItem0Status;
  enabled: App4FeatureWebhooksItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureWebhooksItem0ListResponse {
  items: IApp4FeatureWebhooksItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureWebhooksItem0Filter {
  query?: string;
  status?: App4FeatureWebhooksItem0Status[];
  type?: App4FeatureWebhooksItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureWebhooksItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4FeatureWebhooksItem0(data: Partial<IApp4FeatureWebhooksItem0> = {}): IApp4FeatureWebhooksItem0 {
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
  } as IApp4FeatureWebhooksItem0;
}

export function validateApp4FeatureWebhooksItem0(entity: IApp4FeatureWebhooksItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4FeatureWebhooksItem0(entity: IApp4FeatureWebhooksItem0): IApp4FeatureWebhooksItem0 {
  return { ...entity };
}