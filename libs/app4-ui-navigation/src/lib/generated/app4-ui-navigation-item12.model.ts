export enum App4UiNavigationItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem12Status;
  enabled: App4UiNavigationItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiNavigationItem12ListResponse {
  items: IApp4UiNavigationItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem12Filter {
  query?: string;
  status?: App4UiNavigationItem12Status[];
  type?: App4UiNavigationItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem12;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem12(data: Partial<IApp4UiNavigationItem12> = {}): IApp4UiNavigationItem12 {
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
  } as IApp4UiNavigationItem12;
}

export function validateApp4UiNavigationItem12(entity: IApp4UiNavigationItem12): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem12(entity: IApp4UiNavigationItem12): IApp4UiNavigationItem12 {
  return { ...entity };
}