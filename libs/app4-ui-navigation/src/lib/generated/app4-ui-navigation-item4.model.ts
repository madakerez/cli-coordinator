export enum App4UiNavigationItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem4Status;
  enabled: App4UiNavigationItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem4Status;
  category?: App4UiNavigationItem4Type;
}

export interface IApp4UiNavigationItem4ListResponse {
  items: IApp4UiNavigationItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem4Filter {
  query?: string;
  status?: App4UiNavigationItem4Status[];
  type?: App4UiNavigationItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem4;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem4(data: Partial<IApp4UiNavigationItem4> = {}): IApp4UiNavigationItem4 {
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
  } as IApp4UiNavigationItem4;
}

export function validateApp4UiNavigationItem4(entity: IApp4UiNavigationItem4): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem4(entity: IApp4UiNavigationItem4): IApp4UiNavigationItem4 {
  return { ...entity };
}