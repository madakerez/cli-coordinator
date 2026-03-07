export enum App4UiComponentsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiComponentsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiComponentsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiComponentsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiComponentsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiComponentsItem0Status;
  enabled: App4UiComponentsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiComponentsItem0ListResponse {
  items: IApp4UiComponentsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiComponentsItem0Filter {
  query?: string;
  status?: App4UiComponentsItem0Status[];
  type?: App4UiComponentsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiComponentsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiComponentsItem0Model implements IApp4UiComponentsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiComponentsItem0Status = undefined as any;
  enabled: App4UiComponentsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UiComponentsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiComponentsItem0 {
    return { ...this } as IApp4UiComponentsItem0;
  }

  clone(): App4UiComponentsItem0Model {
    return new App4UiComponentsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}