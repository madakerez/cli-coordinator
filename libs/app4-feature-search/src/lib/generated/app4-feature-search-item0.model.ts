export enum App4FeatureSearchItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureSearchItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureSearchItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureSearchItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureSearchItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureSearchItem0Status;
  enabled: App4FeatureSearchItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureSearchItem0ListResponse {
  items: IApp4FeatureSearchItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureSearchItem0Filter {
  query?: string;
  status?: App4FeatureSearchItem0Status[];
  type?: App4FeatureSearchItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureSearchItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureSearchItem0Model implements IApp4FeatureSearchItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureSearchItem0Status = undefined as any;
  enabled: App4FeatureSearchItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureSearchItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureSearchItem0 {
    return { ...this } as IApp4FeatureSearchItem0;
  }

  clone(): App4FeatureSearchItem0Model {
    return new App4FeatureSearchItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}