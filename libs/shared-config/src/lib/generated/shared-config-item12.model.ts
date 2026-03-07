export enum SharedConfigItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedConfigItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedConfigItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedConfigItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedConfigItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedConfigItem12Status;
  enabled: SharedConfigItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedConfigItem12ListResponse {
  items: ISharedConfigItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedConfigItem12Filter {
  query?: string;
  status?: SharedConfigItem12Status[];
  type?: SharedConfigItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedConfigItem12;
  sortOrder?: 'asc' | 'desc';
}

export class SharedConfigItem12Model implements ISharedConfigItem12 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedConfigItem12Status = undefined as any;
  enabled: SharedConfigItem12Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedConfigItem12>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedConfigItem12 {
    return { ...this } as ISharedConfigItem12;
  }

  clone(): SharedConfigItem12Model {
    return new SharedConfigItem12Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}