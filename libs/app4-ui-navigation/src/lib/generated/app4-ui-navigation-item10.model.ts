export enum App4UiNavigationItem10Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem10Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem10Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem10Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem10 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem10Status;
  enabled: App4UiNavigationItem10Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem10Status;
  category?: App4UiNavigationItem10Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: App4UiNavigationItem10Status;
  status?: App4UiNavigationItem10Type;
}

export interface IApp4UiNavigationItem10ListResponse {
  items: IApp4UiNavigationItem10[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem10Filter {
  query?: string;
  status?: App4UiNavigationItem10Status[];
  type?: App4UiNavigationItem10Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem10;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiNavigationItem10Model implements IApp4UiNavigationItem10 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiNavigationItem10Status = undefined as any;
  enabled: App4UiNavigationItem10Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiNavigationItem10Status = undefined as any;
  category: App4UiNavigationItem10Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: App4UiNavigationItem10Status = undefined as any;
  status: App4UiNavigationItem10Type = undefined as any;

  constructor(data?: Partial<IApp4UiNavigationItem10>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiNavigationItem10 {
    return { ...this } as IApp4UiNavigationItem10;
  }

  clone(): App4UiNavigationItem10Model {
    return new App4UiNavigationItem10Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}