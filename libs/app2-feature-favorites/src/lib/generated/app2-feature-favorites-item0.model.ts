export enum App2FeatureFavoritesItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureFavoritesItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureFavoritesItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureFavoritesItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureFavoritesItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureFavoritesItem0Status;
  enabled: App2FeatureFavoritesItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureFavoritesItem0ListResponse {
  items: IApp2FeatureFavoritesItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureFavoritesItem0Filter {
  query?: string;
  status?: App2FeatureFavoritesItem0Status[];
  type?: App2FeatureFavoritesItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureFavoritesItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp2FeatureFavoritesItem0(data: Partial<IApp2FeatureFavoritesItem0> = {}): IApp2FeatureFavoritesItem0 {
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
  } as IApp2FeatureFavoritesItem0;
}

export function validateApp2FeatureFavoritesItem0(entity: IApp2FeatureFavoritesItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp2FeatureFavoritesItem0(entity: IApp2FeatureFavoritesItem0): IApp2FeatureFavoritesItem0 {
  return { ...entity };
}