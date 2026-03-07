export enum App2UiCardsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UiCardsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UiCardsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UiCardsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UiCardsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UiCardsItem0Status;
  enabled: App2UiCardsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UiCardsItem0ListResponse {
  items: IApp2UiCardsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UiCardsItem0Filter {
  query?: string;
  status?: App2UiCardsItem0Status[];
  type?: App2UiCardsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UiCardsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2UiCardsItem0Model implements IApp2UiCardsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2UiCardsItem0Status = undefined as any;
  enabled: App2UiCardsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2UiCardsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2UiCardsItem0 {
    return { ...this } as IApp2UiCardsItem0;
  }

  clone(): App2UiCardsItem0Model {
    return new App2UiCardsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}