export enum App4UiNavigationItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem0Status;
  enabled: App4UiNavigationItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiNavigationItem0ListResponse {
  items: IApp4UiNavigationItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem0Filter {
  query?: string;
  status?: App4UiNavigationItem0Status[];
  type?: App4UiNavigationItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem0(data: Partial<IApp4UiNavigationItem0> = {}): IApp4UiNavigationItem0 {
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
  } as IApp4UiNavigationItem0;
}

export function validateApp4UiNavigationItem0(entity: IApp4UiNavigationItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem0(entity: IApp4UiNavigationItem0): IApp4UiNavigationItem0 {
  return { ...entity };
}