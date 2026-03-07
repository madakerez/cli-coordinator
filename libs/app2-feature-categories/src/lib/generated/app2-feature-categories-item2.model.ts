export enum App2FeatureCategoriesItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureCategoriesItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureCategoriesItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureCategoriesItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureCategoriesItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureCategoriesItem2Status;
  enabled: App2FeatureCategoriesItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp2FeatureCategoriesItem2ListResponse {
  items: IApp2FeatureCategoriesItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureCategoriesItem2Filter {
  query?: string;
  status?: App2FeatureCategoriesItem2Status[];
  type?: App2FeatureCategoriesItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureCategoriesItem2;
  sortOrder?: 'asc' | 'desc';
}

export function createApp2FeatureCategoriesItem2(data: Partial<IApp2FeatureCategoriesItem2> = {}): IApp2FeatureCategoriesItem2 {
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
  } as IApp2FeatureCategoriesItem2;
}

export function validateApp2FeatureCategoriesItem2(entity: IApp2FeatureCategoriesItem2): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp2FeatureCategoriesItem2(entity: IApp2FeatureCategoriesItem2): IApp2FeatureCategoriesItem2 {
  return { ...entity };
}