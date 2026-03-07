export enum App4UiNavigationItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem8Status;
  enabled: App4UiNavigationItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem8Status;
  category?: App4UiNavigationItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface IApp4UiNavigationItem8ListResponse {
  items: IApp4UiNavigationItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem8Filter {
  query?: string;
  status?: App4UiNavigationItem8Status[];
  type?: App4UiNavigationItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem8;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiNavigationItem8Model implements IApp4UiNavigationItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiNavigationItem8Status = undefined as any;
  enabled: App4UiNavigationItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiNavigationItem8Status = undefined as any;
  category: App4UiNavigationItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<IApp4UiNavigationItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiNavigationItem8 {
    return { ...this } as IApp4UiNavigationItem8;
  }

  clone(): App4UiNavigationItem8Model {
    return new App4UiNavigationItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}