export enum SharedHttpItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem4Status;
  enabled: SharedHttpItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem4Status;
  category?: SharedHttpItem4Type;
}

export interface ISharedHttpItem4ListResponse {
  items: ISharedHttpItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem4Filter {
  query?: string;
  status?: SharedHttpItem4Status[];
  type?: SharedHttpItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem4;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedHttpItem4(data: Partial<ISharedHttpItem4> = {}): ISharedHttpItem4 {
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
  } as ISharedHttpItem4;
}

export function validateSharedHttpItem4(entity: ISharedHttpItem4): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedHttpItem4(entity: ISharedHttpItem4): ISharedHttpItem4 {
  return { ...entity };
}