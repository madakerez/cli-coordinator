export enum App1UiNavigationItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1UiNavigationItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1UiNavigationItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1UiNavigationItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1UiNavigationItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1UiNavigationItem0Status;
  enabled: App1UiNavigationItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp1UiNavigationItem0ListResponse {
  items: IApp1UiNavigationItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1UiNavigationItem0Filter {
  query?: string;
  status?: App1UiNavigationItem0Status[];
  type?: App1UiNavigationItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1UiNavigationItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp1UiNavigationItem0(data: Partial<IApp1UiNavigationItem0> = {}): IApp1UiNavigationItem0 {
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
  } as IApp1UiNavigationItem0;
}

export function validateApp1UiNavigationItem0(entity: IApp1UiNavigationItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp1UiNavigationItem0(entity: IApp1UiNavigationItem0): IApp1UiNavigationItem0 {
  return { ...entity };
}