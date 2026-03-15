export enum SharedNotificationsItem7Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem7Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem7Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem7Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem7 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem7Status;
  enabled: SharedNotificationsItem7Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem7Status;
  category?: SharedNotificationsItem7Type;
  tags?: string;
  config?: number;
  options?: boolean;
}

export interface ISharedNotificationsItem7ListResponse {
  items: ISharedNotificationsItem7[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem7Filter {
  query?: string;
  status?: SharedNotificationsItem7Status[];
  type?: SharedNotificationsItem7Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem7;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedNotificationsItem7(data: Partial<ISharedNotificationsItem7> = {}): ISharedNotificationsItem7 {
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
  } as ISharedNotificationsItem7;
}

export function validateSharedNotificationsItem7(entity: ISharedNotificationsItem7): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedNotificationsItem7(entity: ISharedNotificationsItem7): ISharedNotificationsItem7 {
  return { ...entity };
}