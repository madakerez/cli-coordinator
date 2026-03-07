export enum SharedQueueItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedQueueItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedQueueItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedQueueItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedQueueItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedQueueItem12Status;
  enabled: SharedQueueItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedQueueItem12ListResponse {
  items: ISharedQueueItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedQueueItem12Filter {
  query?: string;
  status?: SharedQueueItem12Status[];
  type?: SharedQueueItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedQueueItem12;
  sortOrder?: 'asc' | 'desc';
}

export class SharedQueueItem12Model implements ISharedQueueItem12 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedQueueItem12Status = undefined as any;
  enabled: SharedQueueItem12Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedQueueItem12>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedQueueItem12 {
    return { ...this } as ISharedQueueItem12;
  }

  clone(): SharedQueueItem12Model {
    return new SharedQueueItem12Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}