export enum SharedQueueItem3Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem3Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem3Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem3Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem3 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem3Status;
  enabled: SharedQueueItem3Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem3Status;
}

export interface ISharedQueueItem3ListResponse {
  items: ISharedQueueItem3[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem3Filter {
  query?: string;
  status?: SharedQueueItem3Status[];
  type?: SharedQueueItem3Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem3;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem3Model implements ISharedQueueItem3 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem3Status = undefined as any;
  enabled: SharedQueueItem3Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedQueueItem3Status = undefined as any;

  constructor(data?: Partial<ISharedQueueItem3>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem3 {
    return { ...this } as ISharedQueueItem3;
  }

  clone(): SharedQueueItem3Model {
    return new SharedQueueItem3Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}