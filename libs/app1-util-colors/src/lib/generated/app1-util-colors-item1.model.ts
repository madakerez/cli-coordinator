export enum App1UtilColorsItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1UtilColorsItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1UtilColorsItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1UtilColorsItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1UtilColorsItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1UtilColorsItem1Status;
  enabled: App1UtilColorsItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp1UtilColorsItem1ListResponse {
  items: IApp1UtilColorsItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1UtilColorsItem1Filter {
  query?: string;
  status?: App1UtilColorsItem1Status[];
  type?: App1UtilColorsItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1UtilColorsItem1;
  sortOrder?: 'asc' | 'desc';
}

export function createApp1UtilColorsItem1(data: Partial<IApp1UtilColorsItem1> = {}): IApp1UtilColorsItem1 {
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
  } as IApp1UtilColorsItem1;
}

export function validateApp1UtilColorsItem1(entity: IApp1UtilColorsItem1): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp1UtilColorsItem1(entity: IApp1UtilColorsItem1): IApp1UtilColorsItem1 {
  return { ...entity };
}