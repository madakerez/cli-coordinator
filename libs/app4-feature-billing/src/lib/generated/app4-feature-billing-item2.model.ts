export enum App4FeatureBillingItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureBillingItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureBillingItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureBillingItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureBillingItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureBillingItem2Status;
  enabled: App4FeatureBillingItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp4FeatureBillingItem2ListResponse {
  items: IApp4FeatureBillingItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureBillingItem2Filter {
  query?: string;
  status?: App4FeatureBillingItem2Status[];
  type?: App4FeatureBillingItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureBillingItem2;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureBillingItem2Model implements IApp4FeatureBillingItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureBillingItem2Status = undefined as any;
  enabled: App4FeatureBillingItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<IApp4FeatureBillingItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureBillingItem2 {
    return { ...this } as IApp4FeatureBillingItem2;
  }

  clone(): App4FeatureBillingItem2Model {
    return new App4FeatureBillingItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}