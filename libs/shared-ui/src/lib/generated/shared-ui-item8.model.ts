export enum SharedUiItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem8Status;
  enabled: SharedUiItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedUiItem8Status;
  category?: SharedUiItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedUiItem8ListResponse {
  items: ISharedUiItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem8Filter {
  query?: string;
  status?: SharedUiItem8Status[];
  type?: SharedUiItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem8;
  sortOrder?: 'asc' | 'desc';
}

export class SharedUiItem8Model implements ISharedUiItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedUiItem8Status = undefined as any;
  enabled: SharedUiItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedUiItem8Status = undefined as any;
  category: SharedUiItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<ISharedUiItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedUiItem8 {
    return { ...this } as ISharedUiItem8;
  }

  clone(): SharedUiItem8Model {
    return new SharedUiItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}