export enum App4FeatureApiKeysItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureApiKeysItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureApiKeysItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureApiKeysItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureApiKeysItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureApiKeysItem0Status;
  enabled: App4FeatureApiKeysItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureApiKeysItem0ListResponse {
  items: IApp4FeatureApiKeysItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureApiKeysItem0Filter {
  query?: string;
  status?: App4FeatureApiKeysItem0Status[];
  type?: App4FeatureApiKeysItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureApiKeysItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureApiKeysItem0Model implements IApp4FeatureApiKeysItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureApiKeysItem0Status = undefined as any;
  enabled: App4FeatureApiKeysItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureApiKeysItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureApiKeysItem0 {
    return { ...this } as IApp4FeatureApiKeysItem0;
  }

  clone(): App4FeatureApiKeysItem0Model {
    return new App4FeatureApiKeysItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}