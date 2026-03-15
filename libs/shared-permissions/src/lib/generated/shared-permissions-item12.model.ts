export enum SharedPermissionsItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedPermissionsItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedPermissionsItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedPermissionsItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedPermissionsItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedPermissionsItem12Status;
  enabled: SharedPermissionsItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedPermissionsItem12ListResponse {
  items: ISharedPermissionsItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedPermissionsItem12Filter {
  query?: string;
  status?: SharedPermissionsItem12Status[];
  type?: SharedPermissionsItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedPermissionsItem12;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedPermissionsItem12(data: Partial<ISharedPermissionsItem12> = {}): ISharedPermissionsItem12 {
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
  } as ISharedPermissionsItem12;
}

export function validateSharedPermissionsItem12(entity: ISharedPermissionsItem12): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedPermissionsItem12(entity: ISharedPermissionsItem12): ISharedPermissionsItem12 {
  return { ...entity };
}