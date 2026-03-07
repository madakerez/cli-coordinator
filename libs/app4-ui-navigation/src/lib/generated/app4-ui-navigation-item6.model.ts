export enum App4UiNavigationItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem6Status;
  enabled: App4UiNavigationItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem6Status;
  category?: App4UiNavigationItem6Type;
  tags?: string;
  config?: number;
}

export interface IApp4UiNavigationItem6ListResponse {
  items: IApp4UiNavigationItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem6Filter {
  query?: string;
  status?: App4UiNavigationItem6Status[];
  type?: App4UiNavigationItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem6;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiNavigationItem6Model implements IApp4UiNavigationItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiNavigationItem6Status = undefined as any;
  enabled: App4UiNavigationItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiNavigationItem6Status = undefined as any;
  category: App4UiNavigationItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<IApp4UiNavigationItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiNavigationItem6 {
    return { ...this } as IApp4UiNavigationItem6;
  }

  clone(): App4UiNavigationItem6Model {
    return new App4UiNavigationItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}