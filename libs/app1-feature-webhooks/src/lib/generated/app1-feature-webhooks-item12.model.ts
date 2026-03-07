export enum App1FeatureWebhooksItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureWebhooksItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureWebhooksItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureWebhooksItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureWebhooksItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureWebhooksItem12Status;
  enabled: App1FeatureWebhooksItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp1FeatureWebhooksItem12ListResponse {
  items: IApp1FeatureWebhooksItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureWebhooksItem12Filter {
  query?: string;
  status?: App1FeatureWebhooksItem12Status[];
  type?: App1FeatureWebhooksItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureWebhooksItem12;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureWebhooksItem12Model implements IApp1FeatureWebhooksItem12 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureWebhooksItem12Status = undefined as any;
  enabled: App1FeatureWebhooksItem12Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp1FeatureWebhooksItem12>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureWebhooksItem12 {
    return { ...this } as IApp1FeatureWebhooksItem12;
  }

  clone(): App1FeatureWebhooksItem12Model {
    return new App1FeatureWebhooksItem12Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}