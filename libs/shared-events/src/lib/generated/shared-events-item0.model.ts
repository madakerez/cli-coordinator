export enum SharedEventsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem0Status;
  enabled: SharedEventsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedEventsItem0ListResponse {
  items: ISharedEventsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem0Filter {
  query?: string;
  status?: SharedEventsItem0Status[];
  type?: SharedEventsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedEventsItem0Model implements ISharedEventsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedEventsItem0Status = undefined as any;
  enabled: SharedEventsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedEventsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedEventsItem0 {
    return { ...this } as ISharedEventsItem0;
  }

  clone(): SharedEventsItem0Model {
    return new SharedEventsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}