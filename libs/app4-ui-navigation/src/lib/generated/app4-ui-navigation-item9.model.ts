export enum App4UiNavigationItem9Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem9Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem9Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem9Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem9 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem9Status;
  enabled: App4UiNavigationItem9Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiNavigationItem9Status;
  category?: App4UiNavigationItem9Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: App4UiNavigationItem9Status;
}

export interface IApp4UiNavigationItem9ListResponse {
  items: IApp4UiNavigationItem9[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem9Filter {
  query?: string;
  status?: App4UiNavigationItem9Status[];
  type?: App4UiNavigationItem9Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem9;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiNavigationItem9Model implements IApp4UiNavigationItem9 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiNavigationItem9Status = undefined as any;
  enabled: App4UiNavigationItem9Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiNavigationItem9Status = undefined as any;
  category: App4UiNavigationItem9Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: App4UiNavigationItem9Status = undefined as any;

  constructor(data?: Partial<IApp4UiNavigationItem9>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiNavigationItem9 {
    return { ...this } as IApp4UiNavigationItem9;
  }

  clone(): App4UiNavigationItem9Model {
    return new App4UiNavigationItem9Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}