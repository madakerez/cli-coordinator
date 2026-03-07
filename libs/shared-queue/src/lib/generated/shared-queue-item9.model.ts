export enum SharedQueueItem9Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem9Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem9Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem9Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem9 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem9Status;
  enabled: SharedQueueItem9Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem9Status;
  category?: SharedQueueItem9Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: SharedQueueItem9Status;
}

export interface ISharedQueueItem9ListResponse {
  items: ISharedQueueItem9[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem9Filter {
  query?: string;
  status?: SharedQueueItem9Status[];
  type?: SharedQueueItem9Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem9;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem9Model implements ISharedQueueItem9 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem9Status = undefined as any;
  enabled: SharedQueueItem9Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedQueueItem9Status = undefined as any;
  category: SharedQueueItem9Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: SharedQueueItem9Status = undefined as any;

  constructor(data?: Partial<ISharedQueueItem9>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem9 {
    return { ...this } as ISharedQueueItem9;
  }

  clone(): SharedQueueItem9Model {
    return new SharedQueueItem9Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}