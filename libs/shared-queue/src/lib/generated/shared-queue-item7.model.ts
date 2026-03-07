export enum SharedQueueItem7Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem7Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem7Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem7Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem7 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem7Status;
  enabled: SharedQueueItem7Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedQueueItem7Status;
  category?: SharedQueueItem7Type;
  tags?: string;
  config?: number;
  options?: boolean;
}

export interface ISharedQueueItem7ListResponse {
  items: ISharedQueueItem7[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem7Filter {
  query?: string;
  status?: SharedQueueItem7Status[];
  type?: SharedQueueItem7Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem7;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem7Model implements ISharedQueueItem7 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem7Status = undefined as any;
  enabled: SharedQueueItem7Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedQueueItem7Status = undefined as any;
  category: SharedQueueItem7Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;

  constructor(data?: Partial<ISharedQueueItem7>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem7 {
    return { ...this } as ISharedQueueItem7;
  }

  clone(): SharedQueueItem7Model {
    return new SharedQueueItem7Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}