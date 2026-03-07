export enum SharedEventsItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem14Status;
  enabled: SharedEventsItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedEventsItem14ListResponse {
  items: ISharedEventsItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem14Filter {
  query?: string;
  status?: SharedEventsItem14Status[];
  type?: SharedEventsItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem14;
  sortOrder?: 'asc' | 'desc';
}

export class SharedEventsItem14Model implements ISharedEventsItem14 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedEventsItem14Status = undefined as any;
  enabled: SharedEventsItem14Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedEventsItem14>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedEventsItem14 {
    return { ...this } as ISharedEventsItem14;
  }

  clone(): SharedEventsItem14Model {
    return new SharedEventsItem14Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}