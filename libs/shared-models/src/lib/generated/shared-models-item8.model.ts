export enum SharedModelsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedModelsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedModelsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedModelsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedModelsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedModelsItem8Status;
  enabled: SharedModelsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedModelsItem8Status;
  category?: SharedModelsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedModelsItem8ListResponse {
  items: ISharedModelsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedModelsItem8Filter {
  query?: string;
  status?: SharedModelsItem8Status[];
  type?: SharedModelsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedModelsItem8;
  sortOrder?: 'asc' | 'desc';
}

export class SharedModelsItem8Model implements ISharedModelsItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedModelsItem8Status = undefined as any;
  enabled: SharedModelsItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedModelsItem8Status = undefined as any;
  category: SharedModelsItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<ISharedModelsItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedModelsItem8 {
    return { ...this } as ISharedModelsItem8;
  }

  clone(): SharedModelsItem8Model {
    return new SharedModelsItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}