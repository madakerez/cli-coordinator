export enum App4UiTablesItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiTablesItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiTablesItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiTablesItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiTablesItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiTablesItem4Status;
  enabled: App4UiTablesItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiTablesItem4Status;
  category?: App4UiTablesItem4Type;
}

export interface IApp4UiTablesItem4ListResponse {
  items: IApp4UiTablesItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiTablesItem4Filter {
  query?: string;
  status?: App4UiTablesItem4Status[];
  type?: App4UiTablesItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiTablesItem4;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiTablesItem4Model implements IApp4UiTablesItem4 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiTablesItem4Status = undefined as any;
  enabled: App4UiTablesItem4Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiTablesItem4Status = undefined as any;
  category: App4UiTablesItem4Type = undefined as any;

  constructor(data?: Partial<IApp4UiTablesItem4>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiTablesItem4 {
    return { ...this } as IApp4UiTablesItem4;
  }

  clone(): App4UiTablesItem4Model {
    return new App4UiTablesItem4Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}