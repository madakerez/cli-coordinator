export enum SharedHttpItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem8Status;
  enabled: SharedHttpItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem8Status;
  category?: SharedHttpItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedHttpItem8ListResponse {
  items: ISharedHttpItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem8Filter {
  query?: string;
  status?: SharedHttpItem8Status[];
  type?: SharedHttpItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem8;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedHttpItem8(data: Partial<ISharedHttpItem8> = {}): ISharedHttpItem8 {
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
  } as ISharedHttpItem8;
}

export function validateSharedHttpItem8(entity: ISharedHttpItem8): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedHttpItem8(entity: ISharedHttpItem8): ISharedHttpItem8 {
  return { ...entity };
}