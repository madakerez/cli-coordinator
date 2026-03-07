export enum App3UtilCompressionItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3UtilCompressionItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3UtilCompressionItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3UtilCompressionItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3UtilCompressionItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3UtilCompressionItem0Status;
  enabled: App3UtilCompressionItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp3UtilCompressionItem0ListResponse {
  items: IApp3UtilCompressionItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3UtilCompressionItem0Filter {
  query?: string;
  status?: App3UtilCompressionItem0Status[];
  type?: App3UtilCompressionItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3UtilCompressionItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App3UtilCompressionItem0Model implements IApp3UtilCompressionItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3UtilCompressionItem0Status = undefined as any;
  enabled: App3UtilCompressionItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp3UtilCompressionItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3UtilCompressionItem0 {
    return { ...this } as IApp3UtilCompressionItem0;
  }

  clone(): App3UtilCompressionItem0Model {
    return new App3UtilCompressionItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}