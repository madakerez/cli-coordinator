export enum SharedHttpItem7Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem7Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem7Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem7Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem7 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem7Status;
  enabled: SharedHttpItem7Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem7Status;
  category?: SharedHttpItem7Type;
  tags?: string;
  config?: number;
  options?: boolean;
}

export interface ISharedHttpItem7ListResponse {
  items: ISharedHttpItem7[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem7Filter {
  query?: string;
  status?: SharedHttpItem7Status[];
  type?: SharedHttpItem7Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem7;
  sortOrder?: 'asc' | 'desc';
}

export function createSharedHttpItem7(data: Partial<ISharedHttpItem7> = {}): ISharedHttpItem7 {
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
  } as ISharedHttpItem7;
}

export function validateSharedHttpItem7(entity: ISharedHttpItem7): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneSharedHttpItem7(entity: ISharedHttpItem7): ISharedHttpItem7 {
  return { ...entity };
}