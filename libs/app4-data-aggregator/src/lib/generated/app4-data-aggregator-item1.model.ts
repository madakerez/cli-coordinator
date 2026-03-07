export enum App4DataAggregatorItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4DataAggregatorItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4DataAggregatorItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4DataAggregatorItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4DataAggregatorItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4DataAggregatorItem1Status;
  enabled: App4DataAggregatorItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4DataAggregatorItem1ListResponse {
  items: IApp4DataAggregatorItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4DataAggregatorItem1Filter {
  query?: string;
  status?: App4DataAggregatorItem1Status[];
  type?: App4DataAggregatorItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4DataAggregatorItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App4DataAggregatorItem1Model implements IApp4DataAggregatorItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4DataAggregatorItem1Status = undefined as any;
  enabled: App4DataAggregatorItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp4DataAggregatorItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4DataAggregatorItem1 {
    return { ...this } as IApp4DataAggregatorItem1;
  }

  clone(): App4DataAggregatorItem1Model {
    return new App4DataAggregatorItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}