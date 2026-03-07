export enum App2UiModalsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UiModalsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UiModalsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UiModalsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UiModalsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UiModalsItem0Status;
  enabled: App2UiModalsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UiModalsItem0ListResponse {
  items: IApp2UiModalsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UiModalsItem0Filter {
  query?: string;
  status?: App2UiModalsItem0Status[];
  type?: App2UiModalsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UiModalsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2UiModalsItem0Model implements IApp2UiModalsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2UiModalsItem0Status = undefined as any;
  enabled: App2UiModalsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2UiModalsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2UiModalsItem0 {
    return { ...this } as IApp2UiModalsItem0;
  }

  clone(): App2UiModalsItem0Model {
    return new App2UiModalsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}