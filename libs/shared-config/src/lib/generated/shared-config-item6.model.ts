export enum SharedConfigItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedConfigItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedConfigItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedConfigItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedConfigItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedConfigItem6Status;
  enabled: SharedConfigItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedConfigItem6Status;
  category?: SharedConfigItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedConfigItem6ListResponse {
  items: ISharedConfigItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedConfigItem6Filter {
  query?: string;
  status?: SharedConfigItem6Status[];
  type?: SharedConfigItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedConfigItem6;
  sortOrder?: 'asc' | 'desc';
}

export class SharedConfigItem6Model implements ISharedConfigItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedConfigItem6Status = undefined as any;
  enabled: SharedConfigItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedConfigItem6Status = undefined as any;
  category: SharedConfigItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<ISharedConfigItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedConfigItem6 {
    return { ...this } as ISharedConfigItem6;
  }

  clone(): SharedConfigItem6Model {
    return new SharedConfigItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}