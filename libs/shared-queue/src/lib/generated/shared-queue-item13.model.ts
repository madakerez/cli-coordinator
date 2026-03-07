export enum SharedQueueItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem13Status;
  enabled: SharedQueueItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedQueueItem13ListResponse {
  items: ISharedQueueItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem13Filter {
  query?: string;
  status?: SharedQueueItem13Status[];
  type?: SharedQueueItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem13;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem13Model implements ISharedQueueItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem13Status = undefined as any;
  enabled: SharedQueueItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedQueueItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem13 {
    return { ...this } as ISharedQueueItem13;
  }

  clone(): SharedQueueItem13Model {
    return new SharedQueueItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}