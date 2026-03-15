export enum SharedNotificationsItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem6Status;
  enabled: SharedNotificationsItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem6Status;
  category?: SharedNotificationsItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedNotificationsItem6ListResponse {
  items: ISharedNotificationsItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem6Filter {
  query?: string;
  status?: SharedNotificationsItem6Status[];
  type?: SharedNotificationsItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedNotificationsItem6(data: Partial<ISharedNotificationsItem6> = {}): ISharedNotificationsItem6 {
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
  } as ISharedNotificationsItem6;
}

export function validateSharedNotificationsItem6(entity: ISharedNotificationsItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedNotificationsItem6(entity: ISharedNotificationsItem6): ISharedNotificationsItem6 {
  return { ...entity };
}