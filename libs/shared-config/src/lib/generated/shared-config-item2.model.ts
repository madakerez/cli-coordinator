export enum SharedConfigItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedConfigItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedConfigItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedConfigItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedConfigItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedConfigItem2Status;
  enabled: SharedConfigItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedConfigItem2ListResponse {
  items: ISharedConfigItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedConfigItem2Filter {
  query?: string;
  status?: SharedConfigItem2Status[];
  type?: SharedConfigItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedConfigItem2;
  sortOrder?: 'asc' | 'desc';
}

export class SharedConfigItem2Model implements ISharedConfigItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedConfigItem2Status = undefined as any;
  enabled: SharedConfigItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedConfigItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedConfigItem2 {
    return { ...this } as ISharedConfigItem2;
  }

  clone(): SharedConfigItem2Model {
    return new SharedConfigItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}