export enum App4UiNavigationItem11Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem11Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem11Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem11Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem11 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem11Status;
  enabled: App4UiNavigationItem11Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem11Status;
  category?: App4UiNavigationItem11Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: App4UiNavigationItem11Status;
  status?: App4UiNavigationItem11Type;
  id?: string;
}

export interface IApp4UiNavigationItem11ListResponse {
  items: IApp4UiNavigationItem11[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem11Filter {
  query?: string;
  status?: App4UiNavigationItem11Status[];
  type?: App4UiNavigationItem11Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem11;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiNavigationItem11Model implements IApp4UiNavigationItem11 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiNavigationItem11Status = undefined as any;
  enabled: App4UiNavigationItem11Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiNavigationItem11Status = undefined as any;
  category: App4UiNavigationItem11Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: App4UiNavigationItem11Status = undefined as any;
  status: App4UiNavigationItem11Type = undefined as any;
  id: string = undefined as any;

  constructor(data?: Partial<IApp4UiNavigationItem11>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiNavigationItem11 {
    return { ...this } as IApp4UiNavigationItem11;
  }

  clone(): App4UiNavigationItem11Model {
    return new App4UiNavigationItem11Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}