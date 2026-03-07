export enum App4UiNavigationItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem1Status;
  enabled: App4UiNavigationItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4UiNavigationItem1ListResponse {
  items: IApp4UiNavigationItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem1Filter {
  query?: string;
  status?: App4UiNavigationItem1Status[];
  type?: App4UiNavigationItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem1;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem1(data: Partial<IApp4UiNavigationItem1> = {}): IApp4UiNavigationItem1 {
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
  } as IApp4UiNavigationItem1;
}

export function validateApp4UiNavigationItem1(entity: IApp4UiNavigationItem1): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem1(entity: IApp4UiNavigationItem1): IApp4UiNavigationItem1 {
  return { ...entity };
}