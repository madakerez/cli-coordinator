export enum App2UiListsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UiListsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UiListsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UiListsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UiListsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UiListsItem0Status;
  enabled: App2UiListsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UiListsItem0ListResponse {
  items: IApp2UiListsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UiListsItem0Filter {
  query?: string;
  status?: App2UiListsItem0Status[];
  type?: App2UiListsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UiListsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2UiListsItem0Model implements IApp2UiListsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2UiListsItem0Status = undefined as any;
  enabled: App2UiListsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2UiListsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2UiListsItem0 {
    return { ...this } as IApp2UiListsItem0;
  }

  clone(): App2UiListsItem0Model {
    return new App2UiListsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}