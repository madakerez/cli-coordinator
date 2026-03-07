export enum App3FeatureAnalyticsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3FeatureAnalyticsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3FeatureAnalyticsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3FeatureAnalyticsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3FeatureAnalyticsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3FeatureAnalyticsItem0Status;
  enabled: App3FeatureAnalyticsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp3FeatureAnalyticsItem0ListResponse {
  items: IApp3FeatureAnalyticsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3FeatureAnalyticsItem0Filter {
  query?: string;
  status?: App3FeatureAnalyticsItem0Status[];
  type?: App3FeatureAnalyticsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3FeatureAnalyticsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App3FeatureAnalyticsItem0Model implements IApp3FeatureAnalyticsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3FeatureAnalyticsItem0Status = undefined as any;
  enabled: App3FeatureAnalyticsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp3FeatureAnalyticsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3FeatureAnalyticsItem0 {
    return { ...this } as IApp3FeatureAnalyticsItem0;
  }

  clone(): App3FeatureAnalyticsItem0Model {
    return new App3FeatureAnalyticsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}