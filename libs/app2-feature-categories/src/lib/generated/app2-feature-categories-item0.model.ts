export enum App2FeatureCategoriesItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureCategoriesItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureCategoriesItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureCategoriesItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureCategoriesItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureCategoriesItem0Status;
  enabled: App2FeatureCategoriesItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureCategoriesItem0ListResponse {
  items: IApp2FeatureCategoriesItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureCategoriesItem0Filter {
  query?: string;
  status?: App2FeatureCategoriesItem0Status[];
  type?: App2FeatureCategoriesItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureCategoriesItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureCategoriesItem0Model implements IApp2FeatureCategoriesItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureCategoriesItem0Status = undefined as any;
  enabled: App2FeatureCategoriesItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2FeatureCategoriesItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureCategoriesItem0 {
    return { ...this } as IApp2FeatureCategoriesItem0;
  }

  clone(): App2FeatureCategoriesItem0Model {
    return new App2FeatureCategoriesItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}