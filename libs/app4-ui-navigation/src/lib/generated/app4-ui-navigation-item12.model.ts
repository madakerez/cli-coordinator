export enum App4UiNavigationItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem12Status;
  enabled: App4UiNavigationItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiNavigationItem12ListResponse {
  items: IApp4UiNavigationItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem12Filter {
  query?: string;
  status?: App4UiNavigationItem12Status[];
  type?: App4UiNavigationItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem12;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiNavigationItem12Model implements IApp4UiNavigationItem12 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiNavigationItem12Status = undefined as any;
  enabled: App4UiNavigationItem12Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UiNavigationItem12>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiNavigationItem12 {
    return { ...this } as IApp4UiNavigationItem12;
  }

  clone(): App4UiNavigationItem12Model {
    return new App4UiNavigationItem12Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}