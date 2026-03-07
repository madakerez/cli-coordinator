export enum App4UiNavigationItem3Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem3Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem3Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem3Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem3 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem3Status;
  enabled: App4UiNavigationItem3Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem3Status;
}

export interface IApp4UiNavigationItem3ListResponse {
  items: IApp4UiNavigationItem3[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem3Filter {
  query?: string;
  status?: App4UiNavigationItem3Status[];
  type?: App4UiNavigationItem3Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem3;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem3(data: Partial<IApp4UiNavigationItem3> = {}): IApp4UiNavigationItem3 {
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
  } as IApp4UiNavigationItem3;
}

export function validateApp4UiNavigationItem3(entity: IApp4UiNavigationItem3): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem3(entity: IApp4UiNavigationItem3): IApp4UiNavigationItem3 {
  return { ...entity };
}