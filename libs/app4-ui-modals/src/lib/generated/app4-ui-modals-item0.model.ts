export enum App4UiModalsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiModalsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiModalsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiModalsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiModalsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiModalsItem0Status;
  enabled: App4UiModalsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiModalsItem0ListResponse {
  items: IApp4UiModalsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiModalsItem0Filter {
  query?: string;
  status?: App4UiModalsItem0Status[];
  type?: App4UiModalsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiModalsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiModalsItem0Model implements IApp4UiModalsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiModalsItem0Status = undefined as any;
  enabled: App4UiModalsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UiModalsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiModalsItem0 {
    return { ...this } as IApp4UiModalsItem0;
  }

  clone(): App4UiModalsItem0Model {
    return new App4UiModalsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}