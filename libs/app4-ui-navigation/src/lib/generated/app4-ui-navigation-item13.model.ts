export enum App4UiNavigationItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem13Status;
  enabled: App4UiNavigationItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4UiNavigationItem13ListResponse {
  items: IApp4UiNavigationItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem13Filter {
  query?: string;
  status?: App4UiNavigationItem13Status[];
  type?: App4UiNavigationItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem13(data: Partial<IApp4UiNavigationItem13> = {}): IApp4UiNavigationItem13 {
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
  } as IApp4UiNavigationItem13;
}

export function validateApp4UiNavigationItem13(entity: IApp4UiNavigationItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem13(entity: IApp4UiNavigationItem13): IApp4UiNavigationItem13 {
  return { ...entity };
}