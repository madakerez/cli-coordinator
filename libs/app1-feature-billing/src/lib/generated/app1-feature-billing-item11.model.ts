export enum App1FeatureBillingItem11Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureBillingItem11Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureBillingItem11Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureBillingItem11Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureBillingItem11 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureBillingItem11Status;
  enabled: App1FeatureBillingItem11Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureBillingItem11Status;
  category?: App1FeatureBillingItem11Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: App1FeatureBillingItem11Status;
  status?: App1FeatureBillingItem11Type;
  id?: string;
}

export interface IApp1FeatureBillingItem11ListResponse {
  items: IApp1FeatureBillingItem11[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureBillingItem11Filter {
  query?: string;
  status?: App1FeatureBillingItem11Status[];
  type?: App1FeatureBillingItem11Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureBillingItem11;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureBillingItem11Model implements IApp1FeatureBillingItem11 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureBillingItem11Status = undefined as any;
  enabled: App1FeatureBillingItem11Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureBillingItem11Status = undefined as any;
  category: App1FeatureBillingItem11Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: App1FeatureBillingItem11Status = undefined as any;
  status: App1FeatureBillingItem11Type = undefined as any;
  id: string = undefined as any;

  constructor(data?: Partial<IApp1FeatureBillingItem11>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureBillingItem11 {
    return { ...this } as IApp1FeatureBillingItem11;
  }

  clone(): App1FeatureBillingItem11Model {
    return new App1FeatureBillingItem11Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}