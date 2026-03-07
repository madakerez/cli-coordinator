export enum SharedI18nItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedI18nItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedI18nItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedI18nItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedI18nItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedI18nItem8Status;
  enabled: SharedI18nItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedI18nItem8Status;
  category?: SharedI18nItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedI18nItem8ListResponse {
  items: ISharedI18nItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedI18nItem8Filter {
  query?: string;
  status?: SharedI18nItem8Status[];
  type?: SharedI18nItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedI18nItem8;
  sortOrder?: 'asc' | 'desc';
}

export class SharedI18nItem8Model implements ISharedI18nItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedI18nItem8Status = undefined as any;
  enabled: SharedI18nItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedI18nItem8Status = undefined as any;
  category: SharedI18nItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<ISharedI18nItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedI18nItem8 {
    return { ...this } as ISharedI18nItem8;
  }

  clone(): SharedI18nItem8Model {
    return new SharedI18nItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}