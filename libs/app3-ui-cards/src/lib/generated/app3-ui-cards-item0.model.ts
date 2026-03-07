export enum App3UiCardsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3UiCardsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3UiCardsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3UiCardsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3UiCardsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3UiCardsItem0Status;
  enabled: App3UiCardsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp3UiCardsItem0ListResponse {
  items: IApp3UiCardsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3UiCardsItem0Filter {
  query?: string;
  status?: App3UiCardsItem0Status[];
  type?: App3UiCardsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3UiCardsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App3UiCardsItem0Model implements IApp3UiCardsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3UiCardsItem0Status = undefined as any;
  enabled: App3UiCardsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp3UiCardsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3UiCardsItem0 {
    return { ...this } as IApp3UiCardsItem0;
  }

  clone(): App3UiCardsItem0Model {
    return new App3UiCardsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}