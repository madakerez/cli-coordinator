export enum SharedHttpItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem5Status;
  enabled: SharedHttpItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem5Status;
  category?: SharedHttpItem5Type;
  tags?: string;
}

export interface ISharedHttpItem5ListResponse {
  items: ISharedHttpItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem5Filter {
  query?: string;
  status?: SharedHttpItem5Status[];
  type?: SharedHttpItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem5;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedHttpItem5(data: Partial<ISharedHttpItem5> = {}): ISharedHttpItem5 {
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
  } as ISharedHttpItem5;
}

export function validateSharedHttpItem5(entity: ISharedHttpItem5): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedHttpItem5(entity: ISharedHttpItem5): ISharedHttpItem5 {
  return { ...entity };
}