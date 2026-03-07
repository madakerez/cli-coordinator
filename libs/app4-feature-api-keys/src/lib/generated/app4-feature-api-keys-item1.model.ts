export enum App4FeatureApiKeysItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureApiKeysItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureApiKeysItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureApiKeysItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureApiKeysItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureApiKeysItem1Status;
  enabled: App4FeatureApiKeysItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4FeatureApiKeysItem1ListResponse {
  items: IApp4FeatureApiKeysItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureApiKeysItem1Filter {
  query?: string;
  status?: App4FeatureApiKeysItem1Status[];
  type?: App4FeatureApiKeysItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureApiKeysItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureApiKeysItem1Model implements IApp4FeatureApiKeysItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureApiKeysItem1Status = undefined as any;
  enabled: App4FeatureApiKeysItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp4FeatureApiKeysItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureApiKeysItem1 {
    return { ...this } as IApp4FeatureApiKeysItem1;
  }

  clone(): App4FeatureApiKeysItem1Model {
    return new App4FeatureApiKeysItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}