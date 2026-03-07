export enum SharedHttpItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem14Status;
  enabled: SharedHttpItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedHttpItem14ListResponse {
  items: ISharedHttpItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem14Filter {
  query?: string;
  status?: SharedHttpItem14Status[];
  type?: SharedHttpItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem14;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem14Model implements ISharedHttpItem14 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem14Status = undefined as any;
  enabled: SharedHttpItem14Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedHttpItem14>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem14 {
    return { ...this } as ISharedHttpItem14;
  }

  clone(): SharedHttpItem14Model {
    return new SharedHttpItem14Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}