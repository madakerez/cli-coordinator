export enum SharedEventsItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedEventsItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedEventsItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedEventsItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedEventsItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedEventsItem6Status;
  enabled: SharedEventsItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedEventsItem6Status;
  category?: SharedEventsItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedEventsItem6ListResponse {
  items: ISharedEventsItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedEventsItem6Filter {
  query?: string;
  status?: SharedEventsItem6Status[];
  type?: SharedEventsItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedEventsItem6;
  sortOrder?: 'asc' | 'desc';
}

export class SharedEventsItem6Model implements ISharedEventsItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedEventsItem6Status = undefined as any;
  enabled: SharedEventsItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedEventsItem6Status = undefined as any;
  category: SharedEventsItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<ISharedEventsItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedEventsItem6 {
    return { ...this } as ISharedEventsItem6;
  }

  clone(): SharedEventsItem6Model {
    return new SharedEventsItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}