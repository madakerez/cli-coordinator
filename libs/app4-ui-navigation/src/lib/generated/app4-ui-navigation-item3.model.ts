export enum App4UiNavigationItem3Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem3Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem3Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem3Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem3 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem3Status;
  enabled: App4UiNavigationItem3Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem3Status;
}

export interface IApp4UiNavigationItem3ListResponse {
  items: IApp4UiNavigationItem3[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem3Filter {
  query?: string;
  status?: App4UiNavigationItem3Status[];
  type?: App4UiNavigationItem3Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem3;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiNavigationItem3Model implements IApp4UiNavigationItem3 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiNavigationItem3Status = undefined as any;
  enabled: App4UiNavigationItem3Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiNavigationItem3Status = undefined as any;

  constructor(data?: Partial<IApp4UiNavigationItem3>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiNavigationItem3 {
    return { ...this } as IApp4UiNavigationItem3;
  }

  clone(): App4UiNavigationItem3Model {
    return new App4UiNavigationItem3Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}