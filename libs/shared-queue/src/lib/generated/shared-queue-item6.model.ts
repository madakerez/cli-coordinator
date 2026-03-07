export enum SharedQueueItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem6Status;
  enabled: SharedQueueItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem6Status;
  category?: SharedQueueItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedQueueItem6ListResponse {
  items: ISharedQueueItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem6Filter {
  query?: string;
  status?: SharedQueueItem6Status[];
  type?: SharedQueueItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem6;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem6Model implements ISharedQueueItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem6Status = undefined as any;
  enabled: SharedQueueItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedQueueItem6Status = undefined as any;
  category: SharedQueueItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<ISharedQueueItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem6 {
    return { ...this } as ISharedQueueItem6;
  }

  clone(): SharedQueueItem6Model {
    return new SharedQueueItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}