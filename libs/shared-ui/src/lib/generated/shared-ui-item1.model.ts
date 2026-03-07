export enum SharedUiItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem1Status;
  enabled: SharedUiItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedUiItem1ListResponse {
  items: ISharedUiItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem1Filter {
  query?: string;
  status?: SharedUiItem1Status[];
  type?: SharedUiItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem1;
  sortOrder?: 'asc' | 'desc';
}

export class SharedUiItem1Model implements ISharedUiItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedUiItem1Status = undefined as any;
  enabled: SharedUiItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedUiItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedUiItem1 {
    return { ...this } as ISharedUiItem1;
  }

  clone(): SharedUiItem1Model {
    return new SharedUiItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}