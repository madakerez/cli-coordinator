export enum App1UtilColorsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1UtilColorsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1UtilColorsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1UtilColorsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1UtilColorsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1UtilColorsItem0Status;
  enabled: App1UtilColorsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp1UtilColorsItem0ListResponse {
  items: IApp1UtilColorsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1UtilColorsItem0Filter {
  query?: string;
  status?: App1UtilColorsItem0Status[];
  type?: App1UtilColorsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1UtilColorsItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp1UtilColorsItem0(data: Partial<IApp1UtilColorsItem0> = {}): IApp1UtilColorsItem0 {
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
  } as IApp1UtilColorsItem0;
}

export function validateApp1UtilColorsItem0(entity: IApp1UtilColorsItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp1UtilColorsItem0(entity: IApp1UtilColorsItem0): IApp1UtilColorsItem0 {
  return { ...entity };
}