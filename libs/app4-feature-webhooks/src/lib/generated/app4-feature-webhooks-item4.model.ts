export enum App4FeatureWebhooksItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureWebhooksItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureWebhooksItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureWebhooksItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureWebhooksItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureWebhooksItem4Status;
  enabled: App4FeatureWebhooksItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4FeatureWebhooksItem4Status;
  category?: App4FeatureWebhooksItem4Type;
}

export interface IApp4FeatureWebhooksItem4ListResponse {
  items: IApp4FeatureWebhooksItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureWebhooksItem4Filter {
  query?: string;
  status?: App4FeatureWebhooksItem4Status[];
  type?: App4FeatureWebhooksItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureWebhooksItem4;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureWebhooksItem4Model implements IApp4FeatureWebhooksItem4 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureWebhooksItem4Status = undefined as any;
  enabled: App4FeatureWebhooksItem4Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4FeatureWebhooksItem4Status = undefined as any;
  category: App4FeatureWebhooksItem4Type = undefined as any;

  constructor(data?: Partial<IApp4FeatureWebhooksItem4>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureWebhooksItem4 {
    return { ...this } as IApp4FeatureWebhooksItem4;
  }

  clone(): App4FeatureWebhooksItem4Model {
    return new App4FeatureWebhooksItem4Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}