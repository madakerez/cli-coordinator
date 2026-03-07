export enum SharedEventsItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem1Status;
  enabled: SharedEventsItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedEventsItem1ListResponse {
  items: ISharedEventsItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem1Filter {
  query?: string;
  status?: SharedEventsItem1Status[];
  type?: SharedEventsItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem1;
  sortOrder?: 'asc' | 'desc';
}

export class SharedEventsItem1Model implements ISharedEventsItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedEventsItem1Status = undefined as any;
  enabled: SharedEventsItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedEventsItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedEventsItem1 {
    return { ...this } as ISharedEventsItem1;
  }

  clone(): SharedEventsItem1Model {
    return new SharedEventsItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}