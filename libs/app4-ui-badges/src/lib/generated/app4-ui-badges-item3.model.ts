export enum App4UiBadgesItem3Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiBadgesItem3Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiBadgesItem3Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiBadgesItem3Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiBadgesItem3 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiBadgesItem3Status;
  enabled: App4UiBadgesItem3Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiBadgesItem3Status;
}

export interface IApp4UiBadgesItem3ListResponse {
  items: IApp4UiBadgesItem3[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiBadgesItem3Filter {
  query?: string;
  status?: App4UiBadgesItem3Status[];
  type?: App4UiBadgesItem3Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiBadgesItem3;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiBadgesItem3Model implements IApp4UiBadgesItem3 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiBadgesItem3Status = undefined as any;
  enabled: App4UiBadgesItem3Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiBadgesItem3Status = undefined as any;

  constructor(data?: Partial<IApp4UiBadgesItem3>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiBadgesItem3 {
    return { ...this } as IApp4UiBadgesItem3;
  }

  clone(): App4UiBadgesItem3Model {
    return new App4UiBadgesItem3Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}