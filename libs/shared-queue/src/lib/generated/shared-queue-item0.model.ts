export enum SharedQueueItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem0Status;
  enabled: SharedQueueItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedQueueItem0ListResponse {
  items: ISharedQueueItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem0Filter {
  query?: string;
  status?: SharedQueueItem0Status[];
  type?: SharedQueueItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem0Model implements ISharedQueueItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem0Status = undefined as any;
  enabled: SharedQueueItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedQueueItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem0 {
    return { ...this } as ISharedQueueItem0;
  }

  clone(): SharedQueueItem0Model {
    return new SharedQueueItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}