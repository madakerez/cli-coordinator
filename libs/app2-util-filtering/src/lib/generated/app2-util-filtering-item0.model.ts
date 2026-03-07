export enum App2UtilFilteringItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UtilFilteringItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UtilFilteringItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UtilFilteringItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UtilFilteringItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UtilFilteringItem0Status;
  enabled: App2UtilFilteringItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UtilFilteringItem0ListResponse {
  items: IApp2UtilFilteringItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UtilFilteringItem0Filter {
  query?: string;
  status?: App2UtilFilteringItem0Status[];
  type?: App2UtilFilteringItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UtilFilteringItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2UtilFilteringItem0Model implements IApp2UtilFilteringItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2UtilFilteringItem0Status = undefined as any;
  enabled: App2UtilFilteringItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2UtilFilteringItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2UtilFilteringItem0 {
    return { ...this } as IApp2UtilFilteringItem0;
  }

  clone(): App2UtilFilteringItem0Model {
    return new App2UtilFilteringItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}