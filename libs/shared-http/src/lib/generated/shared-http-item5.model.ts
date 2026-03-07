export enum SharedHttpItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem5Status;
  enabled: SharedHttpItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem5Status;
  category?: SharedHttpItem5Type;
  tags?: string;
}

export interface ISharedHttpItem5ListResponse {
  items: ISharedHttpItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem5Filter {
  query?: string;
  status?: SharedHttpItem5Status[];
  type?: SharedHttpItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem5;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem5Model implements ISharedHttpItem5 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem5Status = undefined as any;
  enabled: SharedHttpItem5Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedHttpItem5Status = undefined as any;
  category: SharedHttpItem5Type = undefined as any;
  tags: string = undefined as any;

  constructor(data?: Partial<ISharedHttpItem5>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem5 {
    return { ...this } as ISharedHttpItem5;
  }

  clone(): SharedHttpItem5Model {
    return new SharedHttpItem5Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}