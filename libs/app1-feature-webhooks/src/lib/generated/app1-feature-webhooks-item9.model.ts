export enum App1FeatureWebhooksItem9Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureWebhooksItem9Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureWebhooksItem9Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureWebhooksItem9Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureWebhooksItem9 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureWebhooksItem9Status;
  enabled: App1FeatureWebhooksItem9Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureWebhooksItem9Status;
  category?: App1FeatureWebhooksItem9Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: App1FeatureWebhooksItem9Status;
}

export interface IApp1FeatureWebhooksItem9ListResponse {
  items: IApp1FeatureWebhooksItem9[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureWebhooksItem9Filter {
  query?: string;
  status?: App1FeatureWebhooksItem9Status[];
  type?: App1FeatureWebhooksItem9Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureWebhooksItem9;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureWebhooksItem9Model implements IApp1FeatureWebhooksItem9 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureWebhooksItem9Status = undefined as any;
  enabled: App1FeatureWebhooksItem9Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureWebhooksItem9Status = undefined as any;
  category: App1FeatureWebhooksItem9Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: App1FeatureWebhooksItem9Status = undefined as any;

  constructor(data?: Partial<IApp1FeatureWebhooksItem9>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureWebhooksItem9 {
    return { ...this } as IApp1FeatureWebhooksItem9;
  }

  clone(): App1FeatureWebhooksItem9Model {
    return new App1FeatureWebhooksItem9Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}