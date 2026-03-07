export enum SharedI18nItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedI18nItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedI18nItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedI18nItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedI18nItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedI18nItem13Status;
  enabled: SharedI18nItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedI18nItem13ListResponse {
  items: ISharedI18nItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedI18nItem13Filter {
  query?: string;
  status?: SharedI18nItem13Status[];
  type?: SharedI18nItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedI18nItem13;
  sortOrder?: 'asc' | 'desc';
}

export class SharedI18nItem13Model implements ISharedI18nItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedI18nItem13Status = undefined as any;
  enabled: SharedI18nItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedI18nItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedI18nItem13 {
    return { ...this } as ISharedI18nItem13;
  }

  clone(): SharedI18nItem13Model {
    return new SharedI18nItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}