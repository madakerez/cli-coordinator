export enum App4UiCardsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiCardsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiCardsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiCardsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiCardsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiCardsItem0Status;
  enabled: App4UiCardsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiCardsItem0ListResponse {
  items: IApp4UiCardsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiCardsItem0Filter {
  query?: string;
  status?: App4UiCardsItem0Status[];
  type?: App4UiCardsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiCardsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiCardsItem0Model implements IApp4UiCardsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiCardsItem0Status = undefined as any;
  enabled: App4UiCardsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UiCardsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiCardsItem0 {
    return { ...this } as IApp4UiCardsItem0;
  }

  clone(): App4UiCardsItem0Model {
    return new App4UiCardsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}