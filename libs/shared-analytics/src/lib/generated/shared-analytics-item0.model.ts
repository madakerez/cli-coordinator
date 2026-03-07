export enum SharedAnalyticsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem0Status;
  enabled: SharedAnalyticsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedAnalyticsItem0ListResponse {
  items: ISharedAnalyticsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem0Filter {
  query?: string;
  status?: SharedAnalyticsItem0Status[];
  type?: SharedAnalyticsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedAnalyticsItem0Model implements ISharedAnalyticsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedAnalyticsItem0Status = undefined as any;
  enabled: SharedAnalyticsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedAnalyticsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedAnalyticsItem0 {
    return { ...this } as ISharedAnalyticsItem0;
  }

  clone(): SharedAnalyticsItem0Model {
    return new SharedAnalyticsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}