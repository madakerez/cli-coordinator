export enum SharedAnalyticsItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem5Status;
  enabled: SharedAnalyticsItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedAnalyticsItem5Status;
  category?: SharedAnalyticsItem5Type;
  tags?: string;
}

export interface ISharedAnalyticsItem5ListResponse {
  items: ISharedAnalyticsItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem5Filter {
  query?: string;
  status?: SharedAnalyticsItem5Status[];
  type?: SharedAnalyticsItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem5;
  sortOrder?: 'asc' | 'desc';
}

export class SharedAnalyticsItem5Model implements ISharedAnalyticsItem5 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedAnalyticsItem5Status = undefined as any;
  enabled: SharedAnalyticsItem5Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedAnalyticsItem5Status = undefined as any;
  category: SharedAnalyticsItem5Type = undefined as any;
  tags: string = undefined as any;

  constructor(data?: Partial<ISharedAnalyticsItem5>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedAnalyticsItem5 {
    return { ...this } as ISharedAnalyticsItem5;
  }

  clone(): SharedAnalyticsItem5Model {
    return new SharedAnalyticsItem5Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}