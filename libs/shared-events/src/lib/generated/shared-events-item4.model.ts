export enum SharedEventsItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem4Status;
  enabled: SharedEventsItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedEventsItem4Status;
  category?: SharedEventsItem4Type;
}

export interface ISharedEventsItem4ListResponse {
  items: ISharedEventsItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem4Filter {
  query?: string;
  status?: SharedEventsItem4Status[];
  type?: SharedEventsItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem4;
  sortOrder?: 'asc' | 'desc';
}

export class SharedEventsItem4Model implements ISharedEventsItem4 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedEventsItem4Status = undefined as any;
  enabled: SharedEventsItem4Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedEventsItem4Status = undefined as any;
  category: SharedEventsItem4Type = undefined as any;

  constructor(data?: Partial<ISharedEventsItem4>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedEventsItem4 {
    return { ...this } as ISharedEventsItem4;
  }

  clone(): SharedEventsItem4Model {
    return new SharedEventsItem4Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}