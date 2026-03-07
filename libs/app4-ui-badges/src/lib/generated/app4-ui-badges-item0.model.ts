export enum App4UiBadgesItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiBadgesItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiBadgesItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiBadgesItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiBadgesItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiBadgesItem0Status;
  enabled: App4UiBadgesItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiBadgesItem0ListResponse {
  items: IApp4UiBadgesItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiBadgesItem0Filter {
  query?: string;
  status?: App4UiBadgesItem0Status[];
  type?: App4UiBadgesItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiBadgesItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiBadgesItem0Model implements IApp4UiBadgesItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiBadgesItem0Status = undefined as any;
  enabled: App4UiBadgesItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UiBadgesItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiBadgesItem0 {
    return { ...this } as IApp4UiBadgesItem0;
  }

  clone(): App4UiBadgesItem0Model {
    return new App4UiBadgesItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}