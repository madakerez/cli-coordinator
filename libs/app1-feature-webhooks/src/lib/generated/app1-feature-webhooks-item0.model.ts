export enum App1FeatureWebhooksItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureWebhooksItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureWebhooksItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureWebhooksItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureWebhooksItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureWebhooksItem0Status;
  enabled: App1FeatureWebhooksItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp1FeatureWebhooksItem0ListResponse {
  items: IApp1FeatureWebhooksItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureWebhooksItem0Filter {
  query?: string;
  status?: App1FeatureWebhooksItem0Status[];
  type?: App1FeatureWebhooksItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureWebhooksItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp1FeatureWebhooksItem0(data: Partial<IApp1FeatureWebhooksItem0> = {}): IApp1FeatureWebhooksItem0 {
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
  } as IApp1FeatureWebhooksItem0;
}

export function validateApp1FeatureWebhooksItem0(entity: IApp1FeatureWebhooksItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp1FeatureWebhooksItem0(entity: IApp1FeatureWebhooksItem0): IApp1FeatureWebhooksItem0 {
  return { ...entity };
}