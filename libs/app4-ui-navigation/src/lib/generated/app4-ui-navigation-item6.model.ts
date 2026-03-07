export enum App4UiNavigationItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem6Status;
  enabled: App4UiNavigationItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem6Status;
  category?: App4UiNavigationItem6Type;
  tags?: string;
  config?: number;
}

export interface IApp4UiNavigationItem6ListResponse {
  items: IApp4UiNavigationItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem6Filter {
  query?: string;
  status?: App4UiNavigationItem6Status[];
  type?: App4UiNavigationItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem6(data: Partial<IApp4UiNavigationItem6> = {}): IApp4UiNavigationItem6 {
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
  } as IApp4UiNavigationItem6;
}

export function validateApp4UiNavigationItem6(entity: IApp4UiNavigationItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem6(entity: IApp4UiNavigationItem6): IApp4UiNavigationItem6 {
  return { ...entity };
}