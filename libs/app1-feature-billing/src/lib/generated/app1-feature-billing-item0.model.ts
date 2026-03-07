export enum App1FeatureBillingItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureBillingItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureBillingItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureBillingItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureBillingItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureBillingItem0Status;
  enabled: App1FeatureBillingItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp1FeatureBillingItem0ListResponse {
  items: IApp1FeatureBillingItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureBillingItem0Filter {
  query?: string;
  status?: App1FeatureBillingItem0Status[];
  type?: App1FeatureBillingItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureBillingItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureBillingItem0Model implements IApp1FeatureBillingItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureBillingItem0Status = undefined as any;
  enabled: App1FeatureBillingItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp1FeatureBillingItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureBillingItem0 {
    return { ...this } as IApp1FeatureBillingItem0;
  }

  clone(): App1FeatureBillingItem0Model {
    return new App1FeatureBillingItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}