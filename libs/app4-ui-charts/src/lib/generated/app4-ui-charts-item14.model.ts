export enum App4UiChartsItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiChartsItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiChartsItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiChartsItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiChartsItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiChartsItem14Status;
  enabled: App4UiChartsItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp4UiChartsItem14ListResponse {
  items: IApp4UiChartsItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiChartsItem14Filter {
  query?: string;
  status?: App4UiChartsItem14Status[];
  type?: App4UiChartsItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiChartsItem14;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiChartsItem14Model implements IApp4UiChartsItem14 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiChartsItem14Status = undefined as any;
  enabled: App4UiChartsItem14Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<IApp4UiChartsItem14>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiChartsItem14 {
    return { ...this } as IApp4UiChartsItem14;
  }

  clone(): App4UiChartsItem14Model {
    return new App4UiChartsItem14Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}