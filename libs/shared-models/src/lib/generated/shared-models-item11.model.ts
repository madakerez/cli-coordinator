export enum SharedModelsItem11Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedModelsItem11Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedModelsItem11Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedModelsItem11Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedModelsItem11 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedModelsItem11Status;
  enabled: SharedModelsItem11Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedModelsItem11Status;
  category?: SharedModelsItem11Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: SharedModelsItem11Status;
  status?: SharedModelsItem11Type;
  id?: string;
}

export interface ISharedModelsItem11ListResponse {
  items: ISharedModelsItem11[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedModelsItem11Filter {
  query?: string;
  status?: SharedModelsItem11Status[];
  type?: SharedModelsItem11Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedModelsItem11;
  sortOrder?: 'asc' | 'desc';
}

export class SharedModelsItem11Model implements ISharedModelsItem11 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedModelsItem11Status = undefined as any;
  enabled: SharedModelsItem11Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedModelsItem11Status = undefined as any;
  category: SharedModelsItem11Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: SharedModelsItem11Status = undefined as any;
  status: SharedModelsItem11Type = undefined as any;
  id: string = undefined as any;

  constructor(data?: Partial<ISharedModelsItem11>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedModelsItem11 {
    return { ...this } as ISharedModelsItem11;
  }

  clone(): SharedModelsItem11Model {
    return new SharedModelsItem11Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}