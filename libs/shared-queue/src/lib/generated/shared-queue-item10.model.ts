export enum SharedQueueItem10Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem10Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem10Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem10Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem10 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem10Status;
  enabled: SharedQueueItem10Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem10Status;
  category?: SharedQueueItem10Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: SharedQueueItem10Status;
  status?: SharedQueueItem10Type;
}

export interface ISharedQueueItem10ListResponse {
  items: ISharedQueueItem10[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem10Filter {
  query?: string;
  status?: SharedQueueItem10Status[];
  type?: SharedQueueItem10Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem10;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem10Model implements ISharedQueueItem10 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem10Status = undefined as any;
  enabled: SharedQueueItem10Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedQueueItem10Status = undefined as any;
  category: SharedQueueItem10Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: SharedQueueItem10Status = undefined as any;
  status: SharedQueueItem10Type = undefined as any;

  constructor(data?: Partial<ISharedQueueItem10>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem10 {
    return { ...this } as ISharedQueueItem10;
  }

  clone(): SharedQueueItem10Model {
    return new SharedQueueItem10Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}