export enum SharedHttpItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem6Status;
  enabled: SharedHttpItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem6Status;
  category?: SharedHttpItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedHttpItem6ListResponse {
  items: ISharedHttpItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem6Filter {
  query?: string;
  status?: SharedHttpItem6Status[];
  type?: SharedHttpItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem6;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedHttpItem6(data: Partial<ISharedHttpItem6> = {}): ISharedHttpItem6 {
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
  } as ISharedHttpItem6;
}

export function validateSharedHttpItem6(entity: ISharedHttpItem6): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedHttpItem6(entity: ISharedHttpItem6): ISharedHttpItem6 {
  return { ...entity };
}