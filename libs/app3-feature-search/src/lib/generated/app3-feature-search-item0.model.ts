export enum App3FeatureSearchItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3FeatureSearchItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3FeatureSearchItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3FeatureSearchItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3FeatureSearchItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3FeatureSearchItem0Status;
  enabled: App3FeatureSearchItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp3FeatureSearchItem0ListResponse {
  items: IApp3FeatureSearchItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3FeatureSearchItem0Filter {
  query?: string;
  status?: App3FeatureSearchItem0Status[];
  type?: App3FeatureSearchItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3FeatureSearchItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App3FeatureSearchItem0Model implements IApp3FeatureSearchItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3FeatureSearchItem0Status = undefined as any;
  enabled: App3FeatureSearchItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp3FeatureSearchItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3FeatureSearchItem0 {
    return { ...this } as IApp3FeatureSearchItem0;
  }

  clone(): App3FeatureSearchItem0Model {
    return new App3FeatureSearchItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}