export enum SharedUiItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem13Status;
  enabled: SharedUiItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedUiItem13ListResponse {
  items: ISharedUiItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem13Filter {
  query?: string;
  status?: SharedUiItem13Status[];
  type?: SharedUiItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem13;
  sortOrder?: 'asc' | 'desc';
}

export class SharedUiItem13Model implements ISharedUiItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedUiItem13Status = undefined as any;
  enabled: SharedUiItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedUiItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedUiItem13 {
    return { ...this } as ISharedUiItem13;
  }

  clone(): SharedUiItem13Model {
    return new SharedUiItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}