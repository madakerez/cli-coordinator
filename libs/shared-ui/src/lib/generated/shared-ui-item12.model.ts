export enum SharedUiItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem12Status;
  enabled: SharedUiItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedUiItem12ListResponse {
  items: ISharedUiItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem12Filter {
  query?: string;
  status?: SharedUiItem12Status[];
  type?: SharedUiItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem12;
  sortOrder?: 'asc' | 'desc';
}

export class SharedUiItem12Model implements ISharedUiItem12 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedUiItem12Status = undefined as any;
  enabled: SharedUiItem12Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedUiItem12>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedUiItem12 {
    return { ...this } as ISharedUiItem12;
  }

  clone(): SharedUiItem12Model {
    return new SharedUiItem12Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}