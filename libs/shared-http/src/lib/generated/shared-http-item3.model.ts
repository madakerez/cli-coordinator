export enum SharedHttpItem3Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem3Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem3Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem3Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem3 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem3Status;
  enabled: SharedHttpItem3Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem3Status;
}

export interface ISharedHttpItem3ListResponse {
  items: ISharedHttpItem3[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem3Filter {
  query?: string;
  status?: SharedHttpItem3Status[];
  type?: SharedHttpItem3Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem3;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedHttpItem3(data: Partial<ISharedHttpItem3> = {}): ISharedHttpItem3 {
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
  } as ISharedHttpItem3;
}

export function validateSharedHttpItem3(entity: ISharedHttpItem3): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedHttpItem3(entity: ISharedHttpItem3): ISharedHttpItem3 {
  return { ...entity };
}