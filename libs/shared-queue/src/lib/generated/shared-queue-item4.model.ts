export enum SharedQueueItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem4Status;
  enabled: SharedQueueItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem4Status;
  category?: SharedQueueItem4Type;
}

export interface ISharedQueueItem4ListResponse {
  items: ISharedQueueItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem4Filter {
  query?: string;
  status?: SharedQueueItem4Status[];
  type?: SharedQueueItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem4;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem4Model implements ISharedQueueItem4 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem4Status = undefined as any;
  enabled: SharedQueueItem4Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedQueueItem4Status = undefined as any;
  category: SharedQueueItem4Type = undefined as any;

  constructor(data?: Partial<ISharedQueueItem4>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem4 {
    return { ...this } as ISharedQueueItem4;
  }

  clone(): SharedQueueItem4Model {
    return new SharedQueueItem4Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}