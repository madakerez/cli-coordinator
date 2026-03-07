export enum App3UiComponentsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3UiComponentsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3UiComponentsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3UiComponentsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3UiComponentsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3UiComponentsItem0Status;
  enabled: App3UiComponentsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp3UiComponentsItem0ListResponse {
  items: IApp3UiComponentsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3UiComponentsItem0Filter {
  query?: string;
  status?: App3UiComponentsItem0Status[];
  type?: App3UiComponentsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3UiComponentsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App3UiComponentsItem0Model implements IApp3UiComponentsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3UiComponentsItem0Status = undefined as any;
  enabled: App3UiComponentsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp3UiComponentsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3UiComponentsItem0 {
    return { ...this } as IApp3UiComponentsItem0;
  }

  clone(): App3UiComponentsItem0Model {
    return new App3UiComponentsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}