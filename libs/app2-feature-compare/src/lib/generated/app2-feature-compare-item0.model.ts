export enum App2FeatureCompareItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureCompareItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureCompareItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureCompareItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureCompareItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureCompareItem0Status;
  enabled: App2FeatureCompareItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureCompareItem0ListResponse {
  items: IApp2FeatureCompareItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureCompareItem0Filter {
  query?: string;
  status?: App2FeatureCompareItem0Status[];
  type?: App2FeatureCompareItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureCompareItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureCompareItem0Model implements IApp2FeatureCompareItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureCompareItem0Status = undefined as any;
  enabled: App2FeatureCompareItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2FeatureCompareItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureCompareItem0 {
    return { ...this } as IApp2FeatureCompareItem0;
  }

  clone(): App2FeatureCompareItem0Model {
    return new App2FeatureCompareItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}