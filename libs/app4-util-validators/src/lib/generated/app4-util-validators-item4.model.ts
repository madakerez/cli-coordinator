export enum App4UtilValidatorsItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UtilValidatorsItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UtilValidatorsItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UtilValidatorsItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UtilValidatorsItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UtilValidatorsItem4Status;
  enabled: App4UtilValidatorsItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UtilValidatorsItem4Status;
  category?: App4UtilValidatorsItem4Type;
}

export interface IApp4UtilValidatorsItem4ListResponse {
  items: IApp4UtilValidatorsItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UtilValidatorsItem4Filter {
  query?: string;
  status?: App4UtilValidatorsItem4Status[];
  type?: App4UtilValidatorsItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UtilValidatorsItem4;
  sortOrder?: 'asc' | 'desc';
}

export class App4UtilValidatorsItem4Model implements IApp4UtilValidatorsItem4 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UtilValidatorsItem4Status = undefined as any;
  enabled: App4UtilValidatorsItem4Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UtilValidatorsItem4Status = undefined as any;
  category: App4UtilValidatorsItem4Type = undefined as any;

  constructor(data?: Partial<IApp4UtilValidatorsItem4>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UtilValidatorsItem4 {
    return { ...this } as IApp4UtilValidatorsItem4;
  }

  clone(): App4UtilValidatorsItem4Model {
    return new App4UtilValidatorsItem4Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}