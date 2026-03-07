export enum SharedQueueItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem1Status;
  enabled: SharedQueueItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedQueueItem1ListResponse {
  items: ISharedQueueItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem1Filter {
  query?: string;
  status?: SharedQueueItem1Status[];
  type?: SharedQueueItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem1;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem1Model implements ISharedQueueItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem1Status = undefined as any;
  enabled: SharedQueueItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedQueueItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem1 {
    return { ...this } as ISharedQueueItem1;
  }

  clone(): SharedQueueItem1Model {
    return new SharedQueueItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}