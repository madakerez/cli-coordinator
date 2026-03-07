export enum App1FeatureWebhooksItem3Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureWebhooksItem3Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureWebhooksItem3Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureWebhooksItem3Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureWebhooksItem3 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureWebhooksItem3Status;
  enabled: App1FeatureWebhooksItem3Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureWebhooksItem3Status;
}

export interface IApp1FeatureWebhooksItem3ListResponse {
  items: IApp1FeatureWebhooksItem3[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureWebhooksItem3Filter {
  query?: string;
  status?: App1FeatureWebhooksItem3Status[];
  type?: App1FeatureWebhooksItem3Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureWebhooksItem3;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureWebhooksItem3Model implements IApp1FeatureWebhooksItem3 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureWebhooksItem3Status = undefined as any;
  enabled: App1FeatureWebhooksItem3Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureWebhooksItem3Status = undefined as any;

  constructor(data?: Partial<IApp1FeatureWebhooksItem3>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureWebhooksItem3 {
    return { ...this } as IApp1FeatureWebhooksItem3;
  }

  clone(): App1FeatureWebhooksItem3Model {
    return new App1FeatureWebhooksItem3Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}