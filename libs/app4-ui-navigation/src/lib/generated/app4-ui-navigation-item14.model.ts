export enum App4UiNavigationItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem14Status;
  enabled: App4UiNavigationItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp4UiNavigationItem14ListResponse {
  items: IApp4UiNavigationItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem14Filter {
  query?: string;
  status?: App4UiNavigationItem14Status[];
  type?: App4UiNavigationItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem14;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem14(data: Partial<IApp4UiNavigationItem14> = {}): IApp4UiNavigationItem14 {
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
  } as IApp4UiNavigationItem14;
}

export function validateApp4UiNavigationItem14(entity: IApp4UiNavigationItem14): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem14(entity: IApp4UiNavigationItem14): IApp4UiNavigationItem14 {
  return { ...entity };
}