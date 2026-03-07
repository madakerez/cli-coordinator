export enum SharedAnalyticsItem17Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem17Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem17Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem17Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem17 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem17Status;
  enabled: SharedAnalyticsItem17Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedAnalyticsItem17Status;
  category?: SharedAnalyticsItem17Type;
  tags?: string;
}

export interface ISharedAnalyticsItem17ListResponse {
  items: ISharedAnalyticsItem17[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem17Filter {
  query?: string;
  status?: SharedAnalyticsItem17Status[];
  type?: SharedAnalyticsItem17Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem17;
  sortOrder?: 'asc' | 'desc';
}

export class SharedAnalyticsItem17Model implements ISharedAnalyticsItem17 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedAnalyticsItem17Status = undefined as any;
  enabled: SharedAnalyticsItem17Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedAnalyticsItem17Status = undefined as any;
  category: SharedAnalyticsItem17Type = undefined as any;
  tags: string = undefined as any;

  constructor(data?: Partial<ISharedAnalyticsItem17>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedAnalyticsItem17 {
    return { ...this } as ISharedAnalyticsItem17;
  }

  clone(): SharedAnalyticsItem17Model {
    return new SharedAnalyticsItem17Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}