export enum App1FeatureBillingItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureBillingItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureBillingItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureBillingItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureBillingItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureBillingItem8Status;
  enabled: App1FeatureBillingItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureBillingItem8Status;
  category?: App1FeatureBillingItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface IApp1FeatureBillingItem8ListResponse {
  items: IApp1FeatureBillingItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureBillingItem8Filter {
  query?: string;
  status?: App1FeatureBillingItem8Status[];
  type?: App1FeatureBillingItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureBillingItem8;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureBillingItem8Model implements IApp1FeatureBillingItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureBillingItem8Status = undefined as any;
  enabled: App1FeatureBillingItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureBillingItem8Status = undefined as any;
  category: App1FeatureBillingItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<IApp1FeatureBillingItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureBillingItem8 {
    return { ...this } as IApp1FeatureBillingItem8;
  }

  clone(): App1FeatureBillingItem8Model {
    return new App1FeatureBillingItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}