export enum SharedNotificationsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem8Status;
  enabled: SharedNotificationsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem8Status;
  category?: SharedNotificationsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedNotificationsItem8ListResponse {
  items: ISharedNotificationsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem8Filter {
  query?: string;
  status?: SharedNotificationsItem8Status[];
  type?: SharedNotificationsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedNotificationsItem8(data: Partial<ISharedNotificationsItem8> = {}): ISharedNotificationsItem8 {
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
  } as ISharedNotificationsItem8;
}

export function validateSharedNotificationsItem8(entity: ISharedNotificationsItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedNotificationsItem8(entity: ISharedNotificationsItem8): ISharedNotificationsItem8 {
  return { ...entity };
}