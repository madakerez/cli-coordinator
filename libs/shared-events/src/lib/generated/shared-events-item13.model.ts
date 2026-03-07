export enum SharedEventsItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem13Status;
  enabled: SharedEventsItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedEventsItem13ListResponse {
  items: ISharedEventsItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem13Filter {
  query?: string;
  status?: SharedEventsItem13Status[];
  type?: SharedEventsItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem13;
  sortOrder?: 'asc' | 'desc';
}

export class SharedEventsItem13Model implements ISharedEventsItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedEventsItem13Status = undefined as any;
  enabled: SharedEventsItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedEventsItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedEventsItem13 {
    return { ...this } as ISharedEventsItem13;
  }

  clone(): SharedEventsItem13Model {
    return new SharedEventsItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}