export enum App1FeatureWebhooksItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureWebhooksItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureWebhooksItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureWebhooksItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureWebhooksItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureWebhooksItem2Status;
  enabled: App1FeatureWebhooksItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp1FeatureWebhooksItem2ListResponse {
  items: IApp1FeatureWebhooksItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureWebhooksItem2Filter {
  query?: string;
  status?: App1FeatureWebhooksItem2Status[];
  type?: App1FeatureWebhooksItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureWebhooksItem2;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureWebhooksItem2Model implements IApp1FeatureWebhooksItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureWebhooksItem2Status = undefined as any;
  enabled: App1FeatureWebhooksItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<IApp1FeatureWebhooksItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureWebhooksItem2 {
    return { ...this } as IApp1FeatureWebhooksItem2;
  }

  clone(): App1FeatureWebhooksItem2Model {
    return new App1FeatureWebhooksItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}