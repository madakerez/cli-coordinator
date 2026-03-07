export enum SharedHttpItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem4Status;
  enabled: SharedHttpItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem4Status;
  category?: SharedHttpItem4Type;
}

export interface ISharedHttpItem4ListResponse {
  items: ISharedHttpItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem4Filter {
  query?: string;
  status?: SharedHttpItem4Status[];
  type?: SharedHttpItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem4;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem4Model implements ISharedHttpItem4 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem4Status = undefined as any;
  enabled: SharedHttpItem4Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedHttpItem4Status = undefined as any;
  category: SharedHttpItem4Type = undefined as any;

  constructor(data?: Partial<ISharedHttpItem4>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem4 {
    return { ...this } as ISharedHttpItem4;
  }

  clone(): SharedHttpItem4Model {
    return new SharedHttpItem4Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}