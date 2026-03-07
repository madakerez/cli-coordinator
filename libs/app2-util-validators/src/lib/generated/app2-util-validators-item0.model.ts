export enum App2UtilValidatorsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UtilValidatorsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UtilValidatorsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UtilValidatorsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UtilValidatorsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UtilValidatorsItem0Status;
  enabled: App2UtilValidatorsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UtilValidatorsItem0ListResponse {
  items: IApp2UtilValidatorsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UtilValidatorsItem0Filter {
  query?: string;
  status?: App2UtilValidatorsItem0Status[];
  type?: App2UtilValidatorsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UtilValidatorsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2UtilValidatorsItem0Model implements IApp2UtilValidatorsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2UtilValidatorsItem0Status = undefined as any;
  enabled: App2UtilValidatorsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2UtilValidatorsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2UtilValidatorsItem0 {
    return { ...this } as IApp2UtilValidatorsItem0;
  }

  clone(): App2UtilValidatorsItem0Model {
    return new App2UtilValidatorsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}