export enum App4UtilParsersItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UtilParsersItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UtilParsersItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UtilParsersItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UtilParsersItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UtilParsersItem0Status;
  enabled: App4UtilParsersItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UtilParsersItem0ListResponse {
  items: IApp4UtilParsersItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UtilParsersItem0Filter {
  query?: string;
  status?: App4UtilParsersItem0Status[];
  type?: App4UtilParsersItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UtilParsersItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4UtilParsersItem0Model implements IApp4UtilParsersItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UtilParsersItem0Status = undefined as any;
  enabled: App4UtilParsersItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UtilParsersItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UtilParsersItem0 {
    return { ...this } as IApp4UtilParsersItem0;
  }

  clone(): App4UtilParsersItem0Model {
    return new App4UtilParsersItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}