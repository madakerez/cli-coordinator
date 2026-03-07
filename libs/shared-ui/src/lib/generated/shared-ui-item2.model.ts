export enum SharedUiItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem2Status;
  enabled: SharedUiItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedUiItem2ListResponse {
  items: ISharedUiItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem2Filter {
  query?: string;
  status?: SharedUiItem2Status[];
  type?: SharedUiItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem2;
  sortOrder?: 'asc' | 'desc';
}

export class SharedUiItem2Model implements ISharedUiItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedUiItem2Status = undefined as any;
  enabled: SharedUiItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedUiItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedUiItem2 {
    return { ...this } as ISharedUiItem2;
  }

  clone(): SharedUiItem2Model {
    return new SharedUiItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}