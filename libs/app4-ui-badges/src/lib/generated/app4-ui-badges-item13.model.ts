export enum App4UiBadgesItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiBadgesItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiBadgesItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiBadgesItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiBadgesItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiBadgesItem13Status;
  enabled: App4UiBadgesItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4UiBadgesItem13ListResponse {
  items: IApp4UiBadgesItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiBadgesItem13Filter {
  query?: string;
  status?: App4UiBadgesItem13Status[];
  type?: App4UiBadgesItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiBadgesItem13;
  sortOrder?: 'asc' | 'desc';
}

export function createApp4UiBadgesItem13(data: Partial<IApp4UiBadgesItem13> = {}): IApp4UiBadgesItem13 {
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
  } as IApp4UiBadgesItem13;
}

export function validateApp4UiBadgesItem13(entity: IApp4UiBadgesItem13): string[] {
  const errors: string[] = [];
  if (!entity.id) errors.push('id is required');
  if (!entity.name) errors.push('name is required');
  return errors;
}

export function cloneApp4UiBadgesItem13(entity: IApp4UiBadgesItem13): IApp4UiBadgesItem13 {
  return { ...entity };
}