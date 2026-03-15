export enum App4UtilParsersItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UtilParsersItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UtilParsersItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UtilParsersItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UtilParsersItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UtilParsersItem4Status;
  enabled: App4UtilParsersItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UtilParsersItem4Status;
  category?: App4UtilParsersItem4Type;
}

export interface IApp4UtilParsersItem4ListResponse {
  items: IApp4UtilParsersItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UtilParsersItem4Filter {
  query?: string;
  status?: App4UtilParsersItem4Status[];
  type?: App4UtilParsersItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UtilParsersItem4;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UtilParsersItem4(data: Partial<IApp4UtilParsersItem4> = {}): IApp4UtilParsersItem4 {
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
  } as IApp4UtilParsersItem4;
}

export function validateApp4UtilParsersItem4(entity: IApp4UtilParsersItem4): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UtilParsersItem4(entity: IApp4UtilParsersItem4): IApp4UtilParsersItem4 {
  return { ...entity };
}