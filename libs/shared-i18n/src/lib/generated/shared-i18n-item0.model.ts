export enum SharedI18nItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedI18nItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedI18nItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedI18nItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedI18nItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedI18nItem0Status;
  enabled: SharedI18nItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedI18nItem0ListResponse {
  items: ISharedI18nItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedI18nItem0Filter {
  query?: string;
  status?: SharedI18nItem0Status[];
  type?: SharedI18nItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedI18nItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedI18nItem0Model implements ISharedI18nItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedI18nItem0Status = undefined as any;
  enabled: SharedI18nItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedI18nItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedI18nItem0 {
    return { ...this } as ISharedI18nItem0;
  }

  clone(): SharedI18nItem0Model {
    return new SharedI18nItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}