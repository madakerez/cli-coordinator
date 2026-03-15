export enum App4UtilValidatorsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UtilValidatorsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UtilValidatorsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UtilValidatorsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UtilValidatorsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UtilValidatorsItem0Status;
  enabled: App4UtilValidatorsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UtilValidatorsItem0ListResponse {
  items: IApp4UtilValidatorsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UtilValidatorsItem0Filter {
  query?: string;
  status?: App4UtilValidatorsItem0Status[];
  type?: App4UtilValidatorsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UtilValidatorsItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UtilValidatorsItem0(data: Partial<IApp4UtilValidatorsItem0> = {}): IApp4UtilValidatorsItem0 {
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
  } as IApp4UtilValidatorsItem0;
}

export function validateApp4UtilValidatorsItem0(entity: IApp4UtilValidatorsItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UtilValidatorsItem0(entity: IApp4UtilValidatorsItem0): IApp4UtilValidatorsItem0 {
  return { ...entity };
}