export enum App4UiNavigationItem11Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem11Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem11Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem11Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem11 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem11Status;
  enabled: App4UiNavigationItem11Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem11Status;
  category?: App4UiNavigationItem11Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: App4UiNavigationItem11Status;
  status?: App4UiNavigationItem11Type;
  id?: string;
}

export interface IApp4UiNavigationItem11ListResponse {
  items: IApp4UiNavigationItem11[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem11Filter {
  query?: string;
  status?: App4UiNavigationItem11Status[];
  type?: App4UiNavigationItem11Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem11;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem11(data: Partial<IApp4UiNavigationItem11> = {}): IApp4UiNavigationItem11 {
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
  } as IApp4UiNavigationItem11;
}

export function validateApp4UiNavigationItem11(entity: IApp4UiNavigationItem11): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem11(entity: IApp4UiNavigationItem11): IApp4UiNavigationItem11 {
  return { ...entity };
}