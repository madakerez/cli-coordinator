export enum App4UiNavigationItem18Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem18Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem18Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem18Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem18 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem18Status;
  enabled: App4UiNavigationItem18Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem18Status;
  category?: App4UiNavigationItem18Type;
  tags?: string;
  config?: number;
}

export interface IApp4UiNavigationItem18ListResponse {
  items: IApp4UiNavigationItem18[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem18Filter {
  query?: string;
  status?: App4UiNavigationItem18Status[];
  type?: App4UiNavigationItem18Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem18;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem18(data: Partial<IApp4UiNavigationItem18> = {}): IApp4UiNavigationItem18 {
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
  } as IApp4UiNavigationItem18;
}

export function validateApp4UiNavigationItem18(entity: IApp4UiNavigationItem18): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem18(entity: IApp4UiNavigationItem18): IApp4UiNavigationItem18 {
  return { ...entity };
}