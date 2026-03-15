export enum App4UiNavigationItem17Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem17Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem17Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem17Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem17 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem17Status;
  enabled: App4UiNavigationItem17Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem17Status;
  category?: App4UiNavigationItem17Type;
  tags?: string;
}

export interface IApp4UiNavigationItem17ListResponse {
  items: IApp4UiNavigationItem17[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem17Filter {
  query?: string;
  status?: App4UiNavigationItem17Status[];
  type?: App4UiNavigationItem17Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem17;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem17(data: Partial<IApp4UiNavigationItem17> = {}): IApp4UiNavigationItem17 {
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
  } as IApp4UiNavigationItem17;
}

export function validateApp4UiNavigationItem17(entity: IApp4UiNavigationItem17): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem17(entity: IApp4UiNavigationItem17): IApp4UiNavigationItem17 {
  return { ...entity };
}