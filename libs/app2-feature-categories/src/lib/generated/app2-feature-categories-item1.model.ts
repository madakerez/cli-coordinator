export enum App2FeatureCategoriesItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureCategoriesItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureCategoriesItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureCategoriesItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureCategoriesItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureCategoriesItem1Status;
  enabled: App2FeatureCategoriesItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp2FeatureCategoriesItem1ListResponse {
  items: IApp2FeatureCategoriesItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureCategoriesItem1Filter {
  query?: string;
  status?: App2FeatureCategoriesItem1Status[];
  type?: App2FeatureCategoriesItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureCategoriesItem1;
  sortOrder?: 'asc' | 'desc';
}

export function createApp2FeatureCategoriesItem1(data: Partial<IApp2FeatureCategoriesItem1> = {}): IApp2FeatureCategoriesItem1 {
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
  } as IApp2FeatureCategoriesItem1;
}

export function validateApp2FeatureCategoriesItem1(entity: IApp2FeatureCategoriesItem1): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp2FeatureCategoriesItem1(entity: IApp2FeatureCategoriesItem1): IApp2FeatureCategoriesItem1 {
  return { ...entity };
}