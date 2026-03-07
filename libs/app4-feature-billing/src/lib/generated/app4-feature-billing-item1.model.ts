export enum App4FeatureBillingItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureBillingItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureBillingItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureBillingItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureBillingItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureBillingItem1Status;
  enabled: App4FeatureBillingItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4FeatureBillingItem1ListResponse {
  items: IApp4FeatureBillingItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureBillingItem1Filter {
  query?: string;
  status?: App4FeatureBillingItem1Status[];
  type?: App4FeatureBillingItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureBillingItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureBillingItem1Model implements IApp4FeatureBillingItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureBillingItem1Status = undefined as any;
  enabled: App4FeatureBillingItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp4FeatureBillingItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureBillingItem1 {
    return { ...this } as IApp4FeatureBillingItem1;
  }

  clone(): App4FeatureBillingItem1Model {
    return new App4FeatureBillingItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}