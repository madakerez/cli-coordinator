export enum App4UiBadgesItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiBadgesItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiBadgesItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiBadgesItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiBadgesItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiBadgesItem6Status;
  enabled: App4UiBadgesItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiBadgesItem6Status;
  category?: App4UiBadgesItem6Type;
  tags?: string;
  config?: number;
}

export interface IApp4UiBadgesItem6ListResponse {
  items: IApp4UiBadgesItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiBadgesItem6Filter {
  query?: string;
  status?: App4UiBadgesItem6Status[];
  type?: App4UiBadgesItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiBadgesItem6;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiBadgesItem6Model implements IApp4UiBadgesItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiBadgesItem6Status = undefined as any;
  enabled: App4UiBadgesItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiBadgesItem6Status = undefined as any;
  category: App4UiBadgesItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<IApp4UiBadgesItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiBadgesItem6 {
    return { ...this } as IApp4UiBadgesItem6;
  }

  clone(): App4UiBadgesItem6Model {
    return new App4UiBadgesItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}