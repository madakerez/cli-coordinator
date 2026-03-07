export enum App4UiBadgesItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiBadgesItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiBadgesItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiBadgesItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiBadgesItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiBadgesItem0Status;
  enabled: App4UiBadgesItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiBadgesItem0ListResponse {
  items: IApp4UiBadgesItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiBadgesItem0Filter {
  query?: string;
  status?: App4UiBadgesItem0Status[];
  type?: App4UiBadgesItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiBadgesItem0;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiBadgesItem0(data: Partial<IApp4UiBadgesItem0> = {}): IApp4UiBadgesItem0 {
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
  } as IApp4UiBadgesItem0;
}

export function validateApp4UiBadgesItem0(entity: IApp4UiBadgesItem0): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiBadgesItem0(entity: IApp4UiBadgesItem0): IApp4UiBadgesItem0 {
  return { ...entity };
}