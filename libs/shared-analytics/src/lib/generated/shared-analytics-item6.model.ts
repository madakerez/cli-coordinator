export enum SharedAnalyticsItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem6Status;
  enabled: SharedAnalyticsItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedAnalyticsItem6Status;
  category?: SharedAnalyticsItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedAnalyticsItem6ListResponse {
  items: ISharedAnalyticsItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem6Filter {
  query?: string;
  status?: SharedAnalyticsItem6Status[];
  type?: SharedAnalyticsItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem6;
  sortOrder?: 'asc' | 'desc';
}

export class SharedAnalyticsItem6Model implements ISharedAnalyticsItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedAnalyticsItem6Status = undefined as any;
  enabled: SharedAnalyticsItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedAnalyticsItem6Status = undefined as any;
  category: SharedAnalyticsItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<ISharedAnalyticsItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedAnalyticsItem6 {
    return { ...this } as ISharedAnalyticsItem6;
  }

  clone(): SharedAnalyticsItem6Model {
    return new SharedAnalyticsItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}