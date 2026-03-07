export enum App2UiComponentsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UiComponentsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UiComponentsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UiComponentsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UiComponentsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UiComponentsItem0Status;
  enabled: App2UiComponentsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UiComponentsItem0ListResponse {
  items: IApp2UiComponentsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UiComponentsItem0Filter {
  query?: string;
  status?: App2UiComponentsItem0Status[];
  type?: App2UiComponentsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UiComponentsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2UiComponentsItem0Model implements IApp2UiComponentsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2UiComponentsItem0Status = undefined as any;
  enabled: App2UiComponentsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2UiComponentsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2UiComponentsItem0 {
    return { ...this } as IApp2UiComponentsItem0;
  }

  clone(): App2UiComponentsItem0Model {
    return new App2UiComponentsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}