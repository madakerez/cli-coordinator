export enum App2UiListsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UiListsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UiListsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UiListsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UiListsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UiListsItem0Status;
  enabled: App2UiListsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UiListsItem0ListResponse {
  items: IApp2UiListsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UiListsItem0Filter {
  query?: string;
  status?: App2UiListsItem0Status[];
  type?: App2UiListsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UiListsItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp2UiListsItem0(data: Partial<IApp2UiListsItem0> = {}): IApp2UiListsItem0 {
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
  } as IApp2UiListsItem0;
}

export function validateApp2UiListsItem0(entity: IApp2UiListsItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp2UiListsItem0(entity: IApp2UiListsItem0): IApp2UiListsItem0 {
  return { ...entity };
}