export enum SharedAnalyticsItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem14Status;
  enabled: SharedAnalyticsItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedAnalyticsItem14ListResponse {
  items: ISharedAnalyticsItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem14Filter {
  query?: string;
  status?: SharedAnalyticsItem14Status[];
  type?: SharedAnalyticsItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem14;
  sortOrder?: 'asc' | 'desc';
}

export class SharedAnalyticsItem14Model implements ISharedAnalyticsItem14 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedAnalyticsItem14Status = undefined as any;
  enabled: SharedAnalyticsItem14Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedAnalyticsItem14>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedAnalyticsItem14 {
    return { ...this } as ISharedAnalyticsItem14;
  }

  clone(): SharedAnalyticsItem14Model {
    return new SharedAnalyticsItem14Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}