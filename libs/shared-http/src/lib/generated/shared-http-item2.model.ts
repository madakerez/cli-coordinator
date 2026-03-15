export enum SharedHttpItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem2Status;
  enabled: SharedHttpItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedHttpItem2ListResponse {
  items: ISharedHttpItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem2Filter {
  query?: string;
  status?: SharedHttpItem2Status[];
  type?: SharedHttpItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem2;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedHttpItem2(data: Partial<ISharedHttpItem2> = {}): ISharedHttpItem2 {
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
  } as ISharedHttpItem2;
}

export function validateSharedHttpItem2(entity: ISharedHttpItem2): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedHttpItem2(entity: ISharedHttpItem2): ISharedHttpItem2 {
  return { ...entity };
}