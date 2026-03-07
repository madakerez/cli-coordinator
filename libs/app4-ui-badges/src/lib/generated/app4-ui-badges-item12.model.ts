export enum App4UiBadgesItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiBadgesItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiBadgesItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiBadgesItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiBadgesItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiBadgesItem12Status;
  enabled: App4UiBadgesItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UiBadgesItem12ListResponse {
  items: IApp4UiBadgesItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiBadgesItem12Filter {
  query?: string;
  status?: App4UiBadgesItem12Status[];
  type?: App4UiBadgesItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiBadgesItem12;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiBadgesItem12Model implements IApp4UiBadgesItem12 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiBadgesItem12Status = undefined as any;
  enabled: App4UiBadgesItem12Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UiBadgesItem12>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiBadgesItem12 {
    return { ...this } as IApp4UiBadgesItem12;
  }

  clone(): App4UiBadgesItem12Model {
    return new App4UiBadgesItem12Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}