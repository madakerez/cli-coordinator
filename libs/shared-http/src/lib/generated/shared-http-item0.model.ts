export enum SharedHttpItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem0Status;
  enabled: SharedHttpItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedHttpItem0ListResponse {
  items: ISharedHttpItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem0Filter {
  query?: string;
  status?: SharedHttpItem0Status[];
  type?: SharedHttpItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem0Model implements ISharedHttpItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem0Status = undefined as any;
  enabled: SharedHttpItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedHttpItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem0 {
    return { ...this } as ISharedHttpItem0;
  }

  clone(): SharedHttpItem0Model {
    return new SharedHttpItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}