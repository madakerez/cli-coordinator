export enum SharedQueueItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem8Status;
  enabled: SharedQueueItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem8Status;
  category?: SharedQueueItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedQueueItem8ListResponse {
  items: ISharedQueueItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem8Filter {
  query?: string;
  status?: SharedQueueItem8Status[];
  type?: SharedQueueItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem8;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem8Model implements ISharedQueueItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem8Status = undefined as any;
  enabled: SharedQueueItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedQueueItem8Status = undefined as any;
  category: SharedQueueItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<ISharedQueueItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem8 {
    return { ...this } as ISharedQueueItem8;
  }

  clone(): SharedQueueItem8Model {
    return new SharedQueueItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}