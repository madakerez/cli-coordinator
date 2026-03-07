export enum App4UiChartsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiChartsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiChartsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiChartsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiChartsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiChartsItem8Status;
  enabled: App4UiChartsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiChartsItem8Status;
  category?: App4UiChartsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface IApp4UiChartsItem8ListResponse {
  items: IApp4UiChartsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiChartsItem8Filter {
  query?: string;
  status?: App4UiChartsItem8Status[];
  type?: App4UiChartsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiChartsItem8;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiChartsItem8Model implements IApp4UiChartsItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiChartsItem8Status = undefined as any;
  enabled: App4UiChartsItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiChartsItem8Status = undefined as any;
  category: App4UiChartsItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<IApp4UiChartsItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiChartsItem8 {
    return { ...this } as IApp4UiChartsItem8;
  }

  clone(): App4UiChartsItem8Model {
    return new App4UiChartsItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}