export enum App2UtilSortingItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2UtilSortingItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2UtilSortingItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2UtilSortingItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2UtilSortingItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2UtilSortingItem0Status;
  enabled: App2UtilSortingItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2UtilSortingItem0ListResponse {
  items: IApp2UtilSortingItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2UtilSortingItem0Filter {
  query?: string;
  status?: App2UtilSortingItem0Status[];
  type?: App2UtilSortingItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2UtilSortingItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2UtilSortingItem0Model implements IApp2UtilSortingItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2UtilSortingItem0Status = undefined as any;
  enabled: App2UtilSortingItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2UtilSortingItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2UtilSortingItem0 {
    return { ...this } as IApp2UtilSortingItem0;
  }

  clone(): App2UtilSortingItem0Model {
    return new App2UtilSortingItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}