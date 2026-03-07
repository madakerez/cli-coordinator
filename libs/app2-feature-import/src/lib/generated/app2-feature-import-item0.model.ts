export enum App2FeatureImportItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureImportItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureImportItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureImportItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureImportItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureImportItem0Status;
  enabled: App2FeatureImportItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureImportItem0ListResponse {
  items: IApp2FeatureImportItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureImportItem0Filter {
  query?: string;
  status?: App2FeatureImportItem0Status[];
  type?: App2FeatureImportItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureImportItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureImportItem0Model implements IApp2FeatureImportItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureImportItem0Status = undefined as any;
  enabled: App2FeatureImportItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2FeatureImportItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureImportItem0 {
    return { ...this } as IApp2FeatureImportItem0;
  }

  clone(): App2FeatureImportItem0Model {
    return new App2FeatureImportItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}