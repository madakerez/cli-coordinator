export enum App2FeatureCategoriesItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureCategoriesItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureCategoriesItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureCategoriesItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureCategoriesItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureCategoriesItem0Status;
  enabled: App2FeatureCategoriesItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureCategoriesItem0ListResponse {
  items: IApp2FeatureCategoriesItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureCategoriesItem0Filter {
  query?: string;
  status?: App2FeatureCategoriesItem0Status[];
  type?: App2FeatureCategoriesItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureCategoriesItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp2FeatureCategoriesItem0(data: Partial<IApp2FeatureCategoriesItem0> = {}): IApp2FeatureCategoriesItem0 {
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
  } as IApp2FeatureCategoriesItem0;
}

export function validateApp2FeatureCategoriesItem0(entity: IApp2FeatureCategoriesItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp2FeatureCategoriesItem0(entity: IApp2FeatureCategoriesItem0): IApp2FeatureCategoriesItem0 {
  return { ...entity };
}