export enum App1FeatureWebhooksItem11Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureWebhooksItem11Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureWebhooksItem11Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureWebhooksItem11Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureWebhooksItem11 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureWebhooksItem11Status;
  enabled: App1FeatureWebhooksItem11Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureWebhooksItem11Status;
  category?: App1FeatureWebhooksItem11Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: App1FeatureWebhooksItem11Status;
  status?: App1FeatureWebhooksItem11Type;
  id?: string;
}

export interface IApp1FeatureWebhooksItem11ListResponse {
  items: IApp1FeatureWebhooksItem11[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureWebhooksItem11Filter {
  query?: string;
  status?: App1FeatureWebhooksItem11Status[];
  type?: App1FeatureWebhooksItem11Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureWebhooksItem11;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureWebhooksItem11Model implements IApp1FeatureWebhooksItem11 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureWebhooksItem11Status = undefined as any;
  enabled: App1FeatureWebhooksItem11Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureWebhooksItem11Status = undefined as any;
  category: App1FeatureWebhooksItem11Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: App1FeatureWebhooksItem11Status = undefined as any;
  status: App1FeatureWebhooksItem11Type = undefined as any;
  id: string = undefined as any;

  constructor(data?: Partial<IApp1FeatureWebhooksItem11>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureWebhooksItem11 {
    return { ...this } as IApp1FeatureWebhooksItem11;
  }

  clone(): App1FeatureWebhooksItem11Model {
    return new App1FeatureWebhooksItem11Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}