export enum App2FeatureHistoryItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureHistoryItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureHistoryItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureHistoryItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureHistoryItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureHistoryItem0Status;
  enabled: App2FeatureHistoryItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureHistoryItem0ListResponse {
  items: IApp2FeatureHistoryItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureHistoryItem0Filter {
  query?: string;
  status?: App2FeatureHistoryItem0Status[];
  type?: App2FeatureHistoryItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureHistoryItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureHistoryItem0Model implements IApp2FeatureHistoryItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureHistoryItem0Status = undefined as any;
  enabled: App2FeatureHistoryItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2FeatureHistoryItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureHistoryItem0 {
    return { ...this } as IApp2FeatureHistoryItem0;
  }

  clone(): App2FeatureHistoryItem0Model {
    return new App2FeatureHistoryItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}