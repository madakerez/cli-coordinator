export enum SharedHttpItem11Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem11Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem11Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem11Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem11 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem11Status;
  enabled: SharedHttpItem11Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem11Status;
  category?: SharedHttpItem11Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: SharedHttpItem11Status;
  status?: SharedHttpItem11Type;
  id?: string;
}

export interface ISharedHttpItem11ListResponse {
  items: ISharedHttpItem11[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem11Filter {
  query?: string;
  status?: SharedHttpItem11Status[];
  type?: SharedHttpItem11Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem11;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedHttpItem11(data: Partial<ISharedHttpItem11> = {}): ISharedHttpItem11 {
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
  } as ISharedHttpItem11;
}

export function validateSharedHttpItem11(entity: ISharedHttpItem11): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedHttpItem11(entity: ISharedHttpItem11): ISharedHttpItem11 {
  return { ...entity };
}