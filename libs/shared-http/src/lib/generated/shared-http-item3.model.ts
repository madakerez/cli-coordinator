export enum SharedHttpItem3Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem3Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem3Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem3Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem3 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem3Status;
  enabled: SharedHttpItem3Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem3Status;
}

export interface ISharedHttpItem3ListResponse {
  items: ISharedHttpItem3[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem3Filter {
  query?: string;
  status?: SharedHttpItem3Status[];
  type?: SharedHttpItem3Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem3;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem3Model implements ISharedHttpItem3 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem3Status = undefined as any;
  enabled: SharedHttpItem3Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedHttpItem3Status = undefined as any;

  constructor(data?: Partial<ISharedHttpItem3>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem3 {
    return { ...this } as ISharedHttpItem3;
  }

  clone(): SharedHttpItem3Model {
    return new SharedHttpItem3Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}