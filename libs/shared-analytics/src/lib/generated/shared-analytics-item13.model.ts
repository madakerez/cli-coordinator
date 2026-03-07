export enum SharedAnalyticsItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedAnalyticsItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedAnalyticsItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedAnalyticsItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedAnalyticsItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedAnalyticsItem13Status;
  enabled: SharedAnalyticsItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedAnalyticsItem13ListResponse {
  items: ISharedAnalyticsItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedAnalyticsItem13Filter {
  query?: string;
  status?: SharedAnalyticsItem13Status[];
  type?: SharedAnalyticsItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedAnalyticsItem13;
  sortOrder?: 'asc' | 'desc';
}

export class SharedAnalyticsItem13Model implements ISharedAnalyticsItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedAnalyticsItem13Status = undefined as any;
  enabled: SharedAnalyticsItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedAnalyticsItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedAnalyticsItem13 {
    return { ...this } as ISharedAnalyticsItem13;
  }

  clone(): SharedAnalyticsItem13Model {
    return new SharedAnalyticsItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}