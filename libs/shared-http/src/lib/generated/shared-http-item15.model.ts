export enum SharedHttpItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem15Status;
  enabled: SharedHttpItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem15Status;
}

export interface ISharedHttpItem15ListResponse {
  items: ISharedHttpItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem15Filter {
  query?: string;
  status?: SharedHttpItem15Status[];
  type?: SharedHttpItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem15;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedHttpItem15(data: Partial<ISharedHttpItem15> = {}): ISharedHttpItem15 {
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
  } as ISharedHttpItem15;
}

export function validateSharedHttpItem15(entity: ISharedHttpItem15): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedHttpItem15(entity: ISharedHttpItem15): ISharedHttpItem15 {
  return { ...entity };
}