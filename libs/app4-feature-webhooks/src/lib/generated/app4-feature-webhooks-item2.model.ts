export enum App4FeatureWebhooksItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureWebhooksItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureWebhooksItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureWebhooksItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureWebhooksItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureWebhooksItem2Status;
  enabled: App4FeatureWebhooksItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp4FeatureWebhooksItem2ListResponse {
  items: IApp4FeatureWebhooksItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureWebhooksItem2Filter {
  query?: string;
  status?: App4FeatureWebhooksItem2Status[];
  type?: App4FeatureWebhooksItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureWebhooksItem2;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureWebhooksItem2Model implements IApp4FeatureWebhooksItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureWebhooksItem2Status = undefined as any;
  enabled: App4FeatureWebhooksItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<IApp4FeatureWebhooksItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureWebhooksItem2 {
    return { ...this } as IApp4FeatureWebhooksItem2;
  }

  clone(): App4FeatureWebhooksItem2Model {
    return new App4FeatureWebhooksItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}