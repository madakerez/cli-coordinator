export enum App4UiTablesItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiTablesItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiTablesItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiTablesItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiTablesItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiTablesItem1Status;
  enabled: App4UiTablesItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4UiTablesItem1ListResponse {
  items: IApp4UiTablesItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiTablesItem1Filter {
  query?: string;
  status?: App4UiTablesItem1Status[];
  type?: App4UiTablesItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiTablesItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiTablesItem1Model implements IApp4UiTablesItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiTablesItem1Status = undefined as any;
  enabled: App4UiTablesItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp4UiTablesItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiTablesItem1 {
    return { ...this } as IApp4UiTablesItem1;
  }

  clone(): App4UiTablesItem1Model {
    return new App4UiTablesItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}