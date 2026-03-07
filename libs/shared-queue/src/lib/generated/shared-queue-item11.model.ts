export enum SharedQueueItem11Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem11Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem11Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem11Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem11 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem11Status;
  enabled: SharedQueueItem11Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem11Status;
  category?: SharedQueueItem11Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: SharedQueueItem11Status;
  status?: SharedQueueItem11Type;
  id?: string;
}

export interface ISharedQueueItem11ListResponse {
  items: ISharedQueueItem11[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem11Filter {
  query?: string;
  status?: SharedQueueItem11Status[];
  type?: SharedQueueItem11Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem11;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem11Model implements ISharedQueueItem11 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem11Status = undefined as any;
  enabled: SharedQueueItem11Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedQueueItem11Status = undefined as any;
  category: SharedQueueItem11Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: SharedQueueItem11Status = undefined as any;
  status: SharedQueueItem11Type = undefined as any;
  id: string = undefined as any;

  constructor(data?: Partial<ISharedQueueItem11>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem11 {
    return { ...this } as ISharedQueueItem11;
  }

  clone(): SharedQueueItem11Model {
    return new SharedQueueItem11Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}