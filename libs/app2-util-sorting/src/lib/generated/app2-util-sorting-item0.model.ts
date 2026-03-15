export enum App2UtilSortingItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UtilSortingItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UtilSortingItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UtilSortingItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UtilSortingItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UtilSortingItem0Status;
  enabled: App2UtilSortingItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UtilSortingItem0ListResponse {
  items: IApp2UtilSortingItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UtilSortingItem0Filter {
  query?: string;
  status?: App2UtilSortingItem0Status[];
  type?: App2UtilSortingItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UtilSortingItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp2UtilSortingItem0(data: Partial<IApp2UtilSortingItem0> = {}): IApp2UtilSortingItem0 {
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
  } as IApp2UtilSortingItem0;
}

export function validateApp2UtilSortingItem0(entity: IApp2UtilSortingItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp2UtilSortingItem0(entity: IApp2UtilSortingItem0): IApp2UtilSortingItem0 {
  return { ...entity };
}