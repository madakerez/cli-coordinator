export enum App4UiBadgesItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiBadgesItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiBadgesItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiBadgesItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiBadgesItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiBadgesItem4Status;
  enabled: App4UiBadgesItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiBadgesItem4Status;
  category?: App4UiBadgesItem4Type;
}

export interface IApp4UiBadgesItem4ListResponse {
  items: IApp4UiBadgesItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiBadgesItem4Filter {
  query?: string;
  status?: App4UiBadgesItem4Status[];
  type?: App4UiBadgesItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiBadgesItem4;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiBadgesItem4Model implements IApp4UiBadgesItem4 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiBadgesItem4Status = undefined as any;
  enabled: App4UiBadgesItem4Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiBadgesItem4Status = undefined as any;
  category: App4UiBadgesItem4Type = undefined as any;

  constructor(data?: Partial<IApp4UiBadgesItem4>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiBadgesItem4 {
    return { ...this } as IApp4UiBadgesItem4;
  }

  clone(): App4UiBadgesItem4Model {
    return new App4UiBadgesItem4Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}