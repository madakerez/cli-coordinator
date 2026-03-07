export enum App4UiNavigationItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem0Status;
  enabled: App4UiNavigationItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiNavigationItem0ListResponse {
  items: IApp4UiNavigationItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem0Filter {
  query?: string;
  status?: App4UiNavigationItem0Status[];
  type?: App4UiNavigationItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiNavigationItem0Model implements IApp4UiNavigationItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiNavigationItem0Status = undefined as any;
  enabled: App4UiNavigationItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UiNavigationItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiNavigationItem0 {
    return { ...this } as IApp4UiNavigationItem0;
  }

  clone(): App4UiNavigationItem0Model {
    return new App4UiNavigationItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}