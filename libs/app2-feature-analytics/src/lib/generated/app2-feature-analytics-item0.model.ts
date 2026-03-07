export enum App2FeatureAnalyticsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureAnalyticsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureAnalyticsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureAnalyticsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureAnalyticsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureAnalyticsItem0Status;
  enabled: App2FeatureAnalyticsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureAnalyticsItem0ListResponse {
  items: IApp2FeatureAnalyticsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureAnalyticsItem0Filter {
  query?: string;
  status?: App2FeatureAnalyticsItem0Status[];
  type?: App2FeatureAnalyticsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureAnalyticsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureAnalyticsItem0Model implements IApp2FeatureAnalyticsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureAnalyticsItem0Status = undefined as any;
  enabled: App2FeatureAnalyticsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2FeatureAnalyticsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureAnalyticsItem0 {
    return { ...this } as IApp2FeatureAnalyticsItem0;
  }

  clone(): App2FeatureAnalyticsItem0Model {
    return new App2FeatureAnalyticsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}