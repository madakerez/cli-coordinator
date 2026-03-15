export enum App4UiNavigationItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem2Status;
  enabled: App4UiNavigationItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp4UiNavigationItem2ListResponse {
  items: IApp4UiNavigationItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem2Filter {
  query?: string;
  status?: App4UiNavigationItem2Status[];
  type?: App4UiNavigationItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem2;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem2(data: Partial<IApp4UiNavigationItem2> = {}): IApp4UiNavigationItem2 {
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
  } as IApp4UiNavigationItem2;
}

export function validateApp4UiNavigationItem2(entity: IApp4UiNavigationItem2): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem2(entity: IApp4UiNavigationItem2): IApp4UiNavigationItem2 {
  return { ...entity };
}