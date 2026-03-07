export enum SharedQueueItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem2Status;
  enabled: SharedQueueItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedQueueItem2ListResponse {
  items: ISharedQueueItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem2Filter {
  query?: string;
  status?: SharedQueueItem2Status[];
  type?: SharedQueueItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem2;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem2Model implements ISharedQueueItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem2Status = undefined as any;
  enabled: SharedQueueItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedQueueItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem2 {
    return { ...this } as ISharedQueueItem2;
  }

  clone(): SharedQueueItem2Model {
    return new SharedQueueItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}