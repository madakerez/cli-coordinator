export enum SharedUiItem7Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem7Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem7Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem7Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem7 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem7Status;
  enabled: SharedUiItem7Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedUiItem7Status;
  category?: SharedUiItem7Type;
  tags?: string;
  config?: number;
  options?: boolean;
}

export interface ISharedUiItem7ListResponse {
  items: ISharedUiItem7[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem7Filter {
  query?: string;
  status?: SharedUiItem7Status[];
  type?: SharedUiItem7Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem7;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedUiItem7(data: Partial<ISharedUiItem7> = {}): ISharedUiItem7 {
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
  } as ISharedUiItem7;
}

export function validateSharedUiItem7(entity: ISharedUiItem7): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedUiItem7(entity: ISharedUiItem7): ISharedUiItem7 {
  return { ...entity };
}