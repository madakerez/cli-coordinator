export enum App4UtilDatesItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UtilDatesItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UtilDatesItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UtilDatesItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UtilDatesItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UtilDatesItem0Status;
  enabled: App4UtilDatesItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UtilDatesItem0ListResponse {
  items: IApp4UtilDatesItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UtilDatesItem0Filter {
  query?: string;
  status?: App4UtilDatesItem0Status[];
  type?: App4UtilDatesItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UtilDatesItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4UtilDatesItem0Model implements IApp4UtilDatesItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UtilDatesItem0Status = undefined as any;
  enabled: App4UtilDatesItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UtilDatesItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UtilDatesItem0 {
    return { ...this } as IApp4UtilDatesItem0;
  }

  clone(): App4UtilDatesItem0Model {
    return new App4UtilDatesItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}