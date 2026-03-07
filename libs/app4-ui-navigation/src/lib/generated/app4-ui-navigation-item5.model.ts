export enum App4UiNavigationItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem5Status;
  enabled: App4UiNavigationItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem5Status;
  category?: App4UiNavigationItem5Type;
  tags?: string;
}

export interface IApp4UiNavigationItem5ListResponse {
  items: IApp4UiNavigationItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem5Filter {
  query?: string;
  status?: App4UiNavigationItem5Status[];
  type?: App4UiNavigationItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem5;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem5(data: Partial<IApp4UiNavigationItem5> = {}): IApp4UiNavigationItem5 {
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
  } as IApp4UiNavigationItem5;
}

export function validateApp4UiNavigationItem5(entity: IApp4UiNavigationItem5): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem5(entity: IApp4UiNavigationItem5): IApp4UiNavigationItem5 {
  return { ...entity };
}