export enum App4UtilJsonItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UtilJsonItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UtilJsonItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UtilJsonItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UtilJsonItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UtilJsonItem4Status;
  enabled: App4UtilJsonItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UtilJsonItem4Status;
  category?: App4UtilJsonItem4Type;
}

export interface IApp4UtilJsonItem4ListResponse {
  items: IApp4UtilJsonItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UtilJsonItem4Filter {
  query?: string;
  status?: App4UtilJsonItem4Status[];
  type?: App4UtilJsonItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UtilJsonItem4;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UtilJsonItem4(data: Partial<IApp4UtilJsonItem4> = {}): IApp4UtilJsonItem4 {
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
  } as IApp4UtilJsonItem4;
}

export function validateApp4UtilJsonItem4(entity: IApp4UtilJsonItem4): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UtilJsonItem4(entity: IApp4UtilJsonItem4): IApp4UtilJsonItem4 {
  return { ...entity };
}