export enum SharedStorageItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedStorageItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedStorageItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedStorageItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedStorageItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedStorageItem0Status;
  enabled: SharedStorageItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedStorageItem0ListResponse {
  items: ISharedStorageItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedStorageItem0Filter {
  query?: string;
  status?: SharedStorageItem0Status[];
  type?: SharedStorageItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedStorageItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedStorageItem0Model implements ISharedStorageItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedStorageItem0Status = undefined as any;
  enabled: SharedStorageItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedStorageItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedStorageItem0 {
    return { ...this } as ISharedStorageItem0;
  }

  clone(): SharedStorageItem0Model {
    return new SharedStorageItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}