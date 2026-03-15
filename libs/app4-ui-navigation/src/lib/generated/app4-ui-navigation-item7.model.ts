export enum App4UiNavigationItem7Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem7Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem7Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem7Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem7 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem7Status;
  enabled: App4UiNavigationItem7Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem7Status;
  category?: App4UiNavigationItem7Type;
  tags?: string;
  config?: number;
  options?: boolean;
}

export interface IApp4UiNavigationItem7ListResponse {
  items: IApp4UiNavigationItem7[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem7Filter {
  query?: string;
  status?: App4UiNavigationItem7Status[];
  type?: App4UiNavigationItem7Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem7;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem7(data: Partial<IApp4UiNavigationItem7> = {}): IApp4UiNavigationItem7 {
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
  } as IApp4UiNavigationItem7;
}

export function validateApp4UiNavigationItem7(entity: IApp4UiNavigationItem7): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem7(entity: IApp4UiNavigationItem7): IApp4UiNavigationItem7 {
  return { ...entity };
}