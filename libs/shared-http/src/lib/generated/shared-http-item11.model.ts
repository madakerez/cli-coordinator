export enum SharedHttpItem11Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem11Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem11Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem11Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem11 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem11Status;
  enabled: SharedHttpItem11Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem11Status;
  category?: SharedHttpItem11Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: SharedHttpItem11Status;
  status?: SharedHttpItem11Type;
  id?: string;
}

export interface ISharedHttpItem11ListResponse {
  items: ISharedHttpItem11[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem11Filter {
  query?: string;
  status?: SharedHttpItem11Status[];
  type?: SharedHttpItem11Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem11;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem11Model implements ISharedHttpItem11 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem11Status = undefined as any;
  enabled: SharedHttpItem11Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedHttpItem11Status = undefined as any;
  category: SharedHttpItem11Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: SharedHttpItem11Status = undefined as any;
  status: SharedHttpItem11Type = undefined as any;
  id: string = undefined as any;

  constructor(data?: Partial<ISharedHttpItem11>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem11 {
    return { ...this } as ISharedHttpItem11;
  }

  clone(): SharedHttpItem11Model {
    return new SharedHttpItem11Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}