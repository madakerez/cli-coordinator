export enum SharedUiItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedUiItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedUiItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedUiItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedUiItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedUiItem6Status;
  enabled: SharedUiItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedUiItem6Status;
  category?: SharedUiItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedUiItem6ListResponse {
  items: ISharedUiItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedUiItem6Filter {
  query?: string;
  status?: SharedUiItem6Status[];
  type?: SharedUiItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedUiItem6;
  sortOrder?: 'asc' | 'desc';
}

export class SharedUiItem6Model implements ISharedUiItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedUiItem6Status = undefined as any;
  enabled: SharedUiItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedUiItem6Status = undefined as any;
  category: SharedUiItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<ISharedUiItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedUiItem6 {
    return { ...this } as ISharedUiItem6;
  }

  clone(): SharedUiItem6Model {
    return new SharedUiItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}