export enum App4UtilValidatorsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UtilValidatorsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UtilValidatorsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UtilValidatorsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UtilValidatorsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UtilValidatorsItem0Status;
  enabled: App4UtilValidatorsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UtilValidatorsItem0ListResponse {
  items: IApp4UtilValidatorsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UtilValidatorsItem0Filter {
  query?: string;
  status?: App4UtilValidatorsItem0Status[];
  type?: App4UtilValidatorsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UtilValidatorsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4UtilValidatorsItem0Model implements IApp4UtilValidatorsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UtilValidatorsItem0Status = undefined as any;
  enabled: App4UtilValidatorsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UtilValidatorsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UtilValidatorsItem0 {
    return { ...this } as IApp4UtilValidatorsItem0;
  }

  clone(): App4UtilValidatorsItem0Model {
    return new App4UtilValidatorsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}