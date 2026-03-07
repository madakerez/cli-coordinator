export enum App2UiChartsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UiChartsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UiChartsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UiChartsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UiChartsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UiChartsItem0Status;
  enabled: App2UiChartsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UiChartsItem0ListResponse {
  items: IApp2UiChartsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UiChartsItem0Filter {
  query?: string;
  status?: App2UiChartsItem0Status[];
  type?: App2UiChartsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UiChartsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2UiChartsItem0Model implements IApp2UiChartsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2UiChartsItem0Status = undefined as any;
  enabled: App2UiChartsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2UiChartsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2UiChartsItem0 {
    return { ...this } as IApp2UiChartsItem0;
  }

  clone(): App2UiChartsItem0Model {
    return new App2UiChartsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}