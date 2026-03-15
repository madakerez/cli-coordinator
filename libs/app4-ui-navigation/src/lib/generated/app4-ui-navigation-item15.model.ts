export enum App4UiNavigationItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem15Status;
  enabled: App4UiNavigationItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem15Status;
}

export interface IApp4UiNavigationItem15ListResponse {
  items: IApp4UiNavigationItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem15Filter {
  query?: string;
  status?: App4UiNavigationItem15Status[];
  type?: App4UiNavigationItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem15;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem15(data: Partial<IApp4UiNavigationItem15> = {}): IApp4UiNavigationItem15 {
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
  } as IApp4UiNavigationItem15;
}

export function validateApp4UiNavigationItem15(entity: IApp4UiNavigationItem15): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem15(entity: IApp4UiNavigationItem15): IApp4UiNavigationItem15 {
  return { ...entity };
}