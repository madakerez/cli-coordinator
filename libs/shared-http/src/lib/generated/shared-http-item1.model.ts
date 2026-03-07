export enum SharedHttpItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem1Status;
  enabled: SharedHttpItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedHttpItem1ListResponse {
  items: ISharedHttpItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem1Filter {
  query?: string;
  status?: SharedHttpItem1Status[];
  type?: SharedHttpItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem1;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem1Model implements ISharedHttpItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem1Status = undefined as any;
  enabled: SharedHttpItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedHttpItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem1 {
    return { ...this } as ISharedHttpItem1;
  }

  clone(): SharedHttpItem1Model {
    return new SharedHttpItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}