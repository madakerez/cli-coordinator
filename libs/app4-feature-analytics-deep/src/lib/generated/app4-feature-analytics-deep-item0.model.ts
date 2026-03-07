export enum App4FeatureAnalyticsDeepItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureAnalyticsDeepItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureAnalyticsDeepItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureAnalyticsDeepItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureAnalyticsDeepItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureAnalyticsDeepItem0Status;
  enabled: App4FeatureAnalyticsDeepItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureAnalyticsDeepItem0ListResponse {
  items: IApp4FeatureAnalyticsDeepItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureAnalyticsDeepItem0Filter {
  query?: string;
  status?: App4FeatureAnalyticsDeepItem0Status[];
  type?: App4FeatureAnalyticsDeepItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureAnalyticsDeepItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureAnalyticsDeepItem0Model implements IApp4FeatureAnalyticsDeepItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureAnalyticsDeepItem0Status = undefined as any;
  enabled: App4FeatureAnalyticsDeepItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureAnalyticsDeepItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureAnalyticsDeepItem0 {
    return { ...this } as IApp4FeatureAnalyticsDeepItem0;
  }

  clone(): App4FeatureAnalyticsDeepItem0Model {
    return new App4FeatureAnalyticsDeepItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}