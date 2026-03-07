export enum SharedQueueItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem14Status;
  enabled: SharedQueueItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedQueueItem14ListResponse {
  items: ISharedQueueItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem14Filter {
  query?: string;
  status?: SharedQueueItem14Status[];
  type?: SharedQueueItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem14;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem14Model implements ISharedQueueItem14 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem14Status = undefined as any;
  enabled: SharedQueueItem14Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedQueueItem14>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem14 {
    return { ...this } as ISharedQueueItem14;
  }

  clone(): SharedQueueItem14Model {
    return new SharedQueueItem14Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}