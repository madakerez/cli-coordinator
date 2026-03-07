export enum SharedAnalyticsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem8Status;
  enabled: SharedAnalyticsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedAnalyticsItem8Status;
  category?: SharedAnalyticsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedAnalyticsItem8ListResponse {
  items: ISharedAnalyticsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem8Filter {
  query?: string;
  status?: SharedAnalyticsItem8Status[];
  type?: SharedAnalyticsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem8;
  sortOrder?: 'asc' | 'desc';
}

export class SharedAnalyticsItem8Model implements ISharedAnalyticsItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedAnalyticsItem8Status = undefined as any;
  enabled: SharedAnalyticsItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedAnalyticsItem8Status = undefined as any;
  category: SharedAnalyticsItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<ISharedAnalyticsItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedAnalyticsItem8 {
    return { ...this } as ISharedAnalyticsItem8;
  }

  clone(): SharedAnalyticsItem8Model {
    return new SharedAnalyticsItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}