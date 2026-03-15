export enum App4UiNavigationItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem8Status;
  enabled: App4UiNavigationItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem8Status;
  category?: App4UiNavigationItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface IApp4UiNavigationItem8ListResponse {
  items: IApp4UiNavigationItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem8Filter {
  query?: string;
  status?: App4UiNavigationItem8Status[];
  type?: App4UiNavigationItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem8(data: Partial<IApp4UiNavigationItem8> = {}): IApp4UiNavigationItem8 {
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
  } as IApp4UiNavigationItem8;
}

export function validateApp4UiNavigationItem8(entity: IApp4UiNavigationItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem8(entity: IApp4UiNavigationItem8): IApp4UiNavigationItem8 {
  return { ...entity };
}