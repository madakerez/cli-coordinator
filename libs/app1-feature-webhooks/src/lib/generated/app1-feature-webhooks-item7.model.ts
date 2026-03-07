export enum App1FeatureWebhooksItem7Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureWebhooksItem7Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureWebhooksItem7Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureWebhooksItem7Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureWebhooksItem7 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureWebhooksItem7Status;
  enabled: App1FeatureWebhooksItem7Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureWebhooksItem7Status;
  category?: App1FeatureWebhooksItem7Type;
  tags?: string;
  config?: number;
  options?: boolean;
}

export interface IApp1FeatureWebhooksItem7ListResponse {
  items: IApp1FeatureWebhooksItem7[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureWebhooksItem7Filter {
  query?: string;
  status?: App1FeatureWebhooksItem7Status[];
  type?: App1FeatureWebhooksItem7Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureWebhooksItem7;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureWebhooksItem7Model implements IApp1FeatureWebhooksItem7 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureWebhooksItem7Status = undefined as any;
  enabled: App1FeatureWebhooksItem7Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureWebhooksItem7Status = undefined as any;
  category: App1FeatureWebhooksItem7Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;

  constructor(data?: Partial<IApp1FeatureWebhooksItem7>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureWebhooksItem7 {
    return { ...this } as IApp1FeatureWebhooksItem7;
  }

  clone(): App1FeatureWebhooksItem7Model {
    return new App1FeatureWebhooksItem7Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}