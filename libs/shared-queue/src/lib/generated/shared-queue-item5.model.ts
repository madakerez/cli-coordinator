export enum SharedQueueItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem5Status;
  enabled: SharedQueueItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem5Status;
  category?: SharedQueueItem5Type;
  tags?: string;
}

export interface ISharedQueueItem5ListResponse {
  items: ISharedQueueItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem5Filter {
  query?: string;
  status?: SharedQueueItem5Status[];
  type?: SharedQueueItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem5;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem5Model implements ISharedQueueItem5 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem5Status = undefined as any;
  enabled: SharedQueueItem5Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedQueueItem5Status = undefined as any;
  category: SharedQueueItem5Type = undefined as any;
  tags: string = undefined as any;

  constructor(data?: Partial<ISharedQueueItem5>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem5 {
    return { ...this } as ISharedQueueItem5;
  }

  clone(): SharedQueueItem5Model {
    return new SharedQueueItem5Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}