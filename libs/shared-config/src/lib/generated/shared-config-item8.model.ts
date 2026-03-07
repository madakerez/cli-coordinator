export enum SharedConfigItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedConfigItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedConfigItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedConfigItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedConfigItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedConfigItem8Status;
  enabled: SharedConfigItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedConfigItem8Status;
  category?: SharedConfigItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedConfigItem8ListResponse {
  items: ISharedConfigItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedConfigItem8Filter {
  query?: string;
  status?: SharedConfigItem8Status[];
  type?: SharedConfigItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedConfigItem8;
  sortOrder?: 'asc' | 'desc';
}

export class SharedConfigItem8Model implements ISharedConfigItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedConfigItem8Status = undefined as any;
  enabled: SharedConfigItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedConfigItem8Status = undefined as any;
  category: SharedConfigItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<ISharedConfigItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedConfigItem8 {
    return { ...this } as ISharedConfigItem8;
  }

  clone(): SharedConfigItem8Model {
    return new SharedConfigItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}