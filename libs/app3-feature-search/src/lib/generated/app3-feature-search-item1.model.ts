export enum App3FeatureSearchItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3FeatureSearchItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3FeatureSearchItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3FeatureSearchItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3FeatureSearchItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3FeatureSearchItem1Status;
  enabled: App3FeatureSearchItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp3FeatureSearchItem1ListResponse {
  items: IApp3FeatureSearchItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3FeatureSearchItem1Filter {
  query?: string;
  status?: App3FeatureSearchItem1Status[];
  type?: App3FeatureSearchItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3FeatureSearchItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App3FeatureSearchItem1Model implements IApp3FeatureSearchItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3FeatureSearchItem1Status = undefined as any;
  enabled: App3FeatureSearchItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp3FeatureSearchItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3FeatureSearchItem1 {
    return { ...this } as IApp3FeatureSearchItem1;
  }

  clone(): App3FeatureSearchItem1Model {
    return new App3FeatureSearchItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}