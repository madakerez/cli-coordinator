export enum App4UiNavigationItem16Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem16Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem16Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem16Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem16 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem16Status;
  enabled: App4UiNavigationItem16Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem16Status;
  category?: App4UiNavigationItem16Type;
}

export interface IApp4UiNavigationItem16ListResponse {
  items: IApp4UiNavigationItem16[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem16Filter {
  query?: string;
  status?: App4UiNavigationItem16Status[];
  type?: App4UiNavigationItem16Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem16;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiNavigationItem16(data: Partial<IApp4UiNavigationItem16> = {}): IApp4UiNavigationItem16 {
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
  } as IApp4UiNavigationItem16;
}

export function validateApp4UiNavigationItem16(entity: IApp4UiNavigationItem16): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiNavigationItem16(entity: IApp4UiNavigationItem16): IApp4UiNavigationItem16 {
  return { ...entity };
}