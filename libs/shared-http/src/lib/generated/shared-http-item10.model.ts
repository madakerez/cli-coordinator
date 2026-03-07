export enum SharedHttpItem10Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem10Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem10Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem10Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem10 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem10Status;
  enabled: SharedHttpItem10Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem10Status;
  category?: SharedHttpItem10Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: SharedHttpItem10Status;
  status?: SharedHttpItem10Type;
}

export interface ISharedHttpItem10ListResponse {
  items: ISharedHttpItem10[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem10Filter {
  query?: string;
  status?: SharedHttpItem10Status[];
  type?: SharedHttpItem10Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem10;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem10Model implements ISharedHttpItem10 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem10Status = undefined as any;
  enabled: SharedHttpItem10Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedHttpItem10Status = undefined as any;
  category: SharedHttpItem10Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: SharedHttpItem10Status = undefined as any;
  status: SharedHttpItem10Type = undefined as any;

  constructor(data?: Partial<ISharedHttpItem10>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem10 {
    return { ...this } as ISharedHttpItem10;
  }

  clone(): SharedHttpItem10Model {
    return new SharedHttpItem10Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}