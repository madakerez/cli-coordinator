export enum SharedConfigItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedConfigItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedConfigItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedConfigItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedConfigItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedConfigItem13Status;
  enabled: SharedConfigItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedConfigItem13ListResponse {
  items: ISharedConfigItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedConfigItem13Filter {
  query?: string;
  status?: SharedConfigItem13Status[];
  type?: SharedConfigItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedConfigItem13;
  sortOrder?: 'asc' | 'desc';
}

export class SharedConfigItem13Model implements ISharedConfigItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedConfigItem13Status = undefined as any;
  enabled: SharedConfigItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedConfigItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedConfigItem13 {
    return { ...this } as ISharedConfigItem13;
  }

  clone(): SharedConfigItem13Model {
    return new SharedConfigItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}