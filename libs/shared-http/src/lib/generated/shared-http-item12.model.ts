export enum SharedHttpItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem12Status;
  enabled: SharedHttpItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedHttpItem12ListResponse {
  items: ISharedHttpItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem12Filter {
  query?: string;
  status?: SharedHttpItem12Status[];
  type?: SharedHttpItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem12;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem12Model implements ISharedHttpItem12 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem12Status = undefined as any;
  enabled: SharedHttpItem12Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedHttpItem12>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem12 {
    return { ...this } as ISharedHttpItem12;
  }

  clone(): SharedHttpItem12Model {
    return new SharedHttpItem12Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}