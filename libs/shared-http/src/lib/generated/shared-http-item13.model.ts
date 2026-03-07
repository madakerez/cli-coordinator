export enum SharedHttpItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem13Status;
  enabled: SharedHttpItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedHttpItem13ListResponse {
  items: ISharedHttpItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem13Filter {
  query?: string;
  status?: SharedHttpItem13Status[];
  type?: SharedHttpItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedHttpItem13(data: Partial<ISharedHttpItem13> = {}): ISharedHttpItem13 {
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
  } as ISharedHttpItem13;
}

export function validateSharedHttpItem13(entity: ISharedHttpItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedHttpItem13(entity: ISharedHttpItem13): ISharedHttpItem13 {
  return { ...entity };
}