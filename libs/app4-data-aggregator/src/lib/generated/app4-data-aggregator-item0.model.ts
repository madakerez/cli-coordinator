export enum App4DataAggregatorItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4DataAggregatorItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4DataAggregatorItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4DataAggregatorItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4DataAggregatorItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4DataAggregatorItem0Status;
  enabled: App4DataAggregatorItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4DataAggregatorItem0ListResponse {
  items: IApp4DataAggregatorItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4DataAggregatorItem0Filter {
  query?: string;
  status?: App4DataAggregatorItem0Status[];
  type?: App4DataAggregatorItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4DataAggregatorItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4DataAggregatorItem0Model implements IApp4DataAggregatorItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4DataAggregatorItem0Status = undefined as any;
  enabled: App4DataAggregatorItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4DataAggregatorItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4DataAggregatorItem0 {
    return { ...this } as IApp4DataAggregatorItem0;
  }

  clone(): App4DataAggregatorItem0Model {
    return new App4DataAggregatorItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}