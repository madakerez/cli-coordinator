export enum SharedEventsItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem2Status;
  enabled: SharedEventsItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedEventsItem2ListResponse {
  items: ISharedEventsItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem2Filter {
  query?: string;
  status?: SharedEventsItem2Status[];
  type?: SharedEventsItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem2;
  sortOrder?: 'asc' | 'desc';
}

export class SharedEventsItem2Model implements ISharedEventsItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedEventsItem2Status = undefined as any;
  enabled: SharedEventsItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedEventsItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedEventsItem2 {
    return { ...this } as ISharedEventsItem2;
  }

  clone(): SharedEventsItem2Model {
    return new SharedEventsItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}