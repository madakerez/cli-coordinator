export enum App4UiComponentsItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiComponentsItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiComponentsItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiComponentsItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiComponentsItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiComponentsItem13Status;
  enabled: App4UiComponentsItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4UiComponentsItem13ListResponse {
  items: IApp4UiComponentsItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiComponentsItem13Filter {
  query?: string;
  status?: App4UiComponentsItem13Status[];
  type?: App4UiComponentsItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiComponentsItem13;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiComponentsItem13Model implements IApp4UiComponentsItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiComponentsItem13Status = undefined as any;
  enabled: App4UiComponentsItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp4UiComponentsItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiComponentsItem13 {
    return { ...this } as IApp4UiComponentsItem13;
  }

  clone(): App4UiComponentsItem13Model {
    return new App4UiComponentsItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}