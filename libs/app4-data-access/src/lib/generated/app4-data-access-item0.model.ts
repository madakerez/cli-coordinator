export enum App4DataAccessItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4DataAccessItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4DataAccessItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4DataAccessItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4DataAccessItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4DataAccessItem0Status;
  enabled: App4DataAccessItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4DataAccessItem0ListResponse {
  items: IApp4DataAccessItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4DataAccessItem0Filter {
  query?: string;
  status?: App4DataAccessItem0Status[];
  type?: App4DataAccessItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4DataAccessItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4DataAccessItem0Model implements IApp4DataAccessItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4DataAccessItem0Status = undefined as any;
  enabled: App4DataAccessItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4DataAccessItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4DataAccessItem0 {
    return { ...this } as IApp4DataAccessItem0;
  }

  clone(): App4DataAccessItem0Model {
    return new App4DataAccessItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}