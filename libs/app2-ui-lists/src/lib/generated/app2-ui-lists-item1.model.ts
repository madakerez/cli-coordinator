export enum App2UiListsItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UiListsItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UiListsItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UiListsItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UiListsItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UiListsItem1Status;
  enabled: App2UiListsItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp2UiListsItem1ListResponse {
  items: IApp2UiListsItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UiListsItem1Filter {
  query?: string;
  status?: App2UiListsItem1Status[];
  type?: App2UiListsItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UiListsItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App2UiListsItem1Model implements IApp2UiListsItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2UiListsItem1Status = undefined as any;
  enabled: App2UiListsItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp2UiListsItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2UiListsItem1 {
    return { ...this } as IApp2UiListsItem1;
  }

  clone(): App2UiListsItem1Model {
    return new App2UiListsItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}