export enum App1FeatureAnalyticsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureAnalyticsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureAnalyticsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureAnalyticsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureAnalyticsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureAnalyticsItem0Status;
  enabled: App1FeatureAnalyticsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp1FeatureAnalyticsItem0ListResponse {
  items: IApp1FeatureAnalyticsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureAnalyticsItem0Filter {
  query?: string;
  status?: App1FeatureAnalyticsItem0Status[];
  type?: App1FeatureAnalyticsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureAnalyticsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureAnalyticsItem0Model implements IApp1FeatureAnalyticsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureAnalyticsItem0Status = undefined as any;
  enabled: App1FeatureAnalyticsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp1FeatureAnalyticsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureAnalyticsItem0 {
    return { ...this } as IApp1FeatureAnalyticsItem0;
  }

  clone(): App1FeatureAnalyticsItem0Model {
    return new App1FeatureAnalyticsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}