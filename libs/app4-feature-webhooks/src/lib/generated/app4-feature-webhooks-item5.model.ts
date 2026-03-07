export enum App4FeatureWebhooksItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureWebhooksItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureWebhooksItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureWebhooksItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureWebhooksItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureWebhooksItem5Status;
  enabled: App4FeatureWebhooksItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4FeatureWebhooksItem5Status;
  category?: App4FeatureWebhooksItem5Type;
  tags?: string;
}

export interface IApp4FeatureWebhooksItem5ListResponse {
  items: IApp4FeatureWebhooksItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureWebhooksItem5Filter {
  query?: string;
  status?: App4FeatureWebhooksItem5Status[];
  type?: App4FeatureWebhooksItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureWebhooksItem5;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureWebhooksItem5Model implements IApp4FeatureWebhooksItem5 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureWebhooksItem5Status = undefined as any;
  enabled: App4FeatureWebhooksItem5Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4FeatureWebhooksItem5Status = undefined as any;
  category: App4FeatureWebhooksItem5Type = undefined as any;
  tags: string = undefined as any;

  constructor(data?: Partial<IApp4FeatureWebhooksItem5>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureWebhooksItem5 {
    return { ...this } as IApp4FeatureWebhooksItem5;
  }

  clone(): App4FeatureWebhooksItem5Model {
    return new App4FeatureWebhooksItem5Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}