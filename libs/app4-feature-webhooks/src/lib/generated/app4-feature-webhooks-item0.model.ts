export enum App4FeatureWebhooksItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureWebhooksItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureWebhooksItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureWebhooksItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureWebhooksItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureWebhooksItem0Status;
  enabled: App4FeatureWebhooksItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureWebhooksItem0ListResponse {
  items: IApp4FeatureWebhooksItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureWebhooksItem0Filter {
  query?: string;
  status?: App4FeatureWebhooksItem0Status[];
  type?: App4FeatureWebhooksItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureWebhooksItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureWebhooksItem0Model implements IApp4FeatureWebhooksItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureWebhooksItem0Status = undefined as any;
  enabled: App4FeatureWebhooksItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureWebhooksItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureWebhooksItem0 {
    return { ...this } as IApp4FeatureWebhooksItem0;
  }

  clone(): App4FeatureWebhooksItem0Model {
    return new App4FeatureWebhooksItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}