export enum App1FeatureWebhooksItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureWebhooksItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureWebhooksItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureWebhooksItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureWebhooksItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureWebhooksItem14Status;
  enabled: App1FeatureWebhooksItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp1FeatureWebhooksItem14ListResponse {
  items: IApp1FeatureWebhooksItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureWebhooksItem14Filter {
  query?: string;
  status?: App1FeatureWebhooksItem14Status[];
  type?: App1FeatureWebhooksItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureWebhooksItem14;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureWebhooksItem14Model implements IApp1FeatureWebhooksItem14 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureWebhooksItem14Status = undefined as any;
  enabled: App1FeatureWebhooksItem14Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<IApp1FeatureWebhooksItem14>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureWebhooksItem14 {
    return { ...this } as IApp1FeatureWebhooksItem14;
  }

  clone(): App1FeatureWebhooksItem14Model {
    return new App1FeatureWebhooksItem14Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}