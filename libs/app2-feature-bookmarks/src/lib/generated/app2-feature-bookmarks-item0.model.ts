export enum App2FeatureBookmarksItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureBookmarksItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureBookmarksItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureBookmarksItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureBookmarksItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureBookmarksItem0Status;
  enabled: App2FeatureBookmarksItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureBookmarksItem0ListResponse {
  items: IApp2FeatureBookmarksItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureBookmarksItem0Filter {
  query?: string;
  status?: App2FeatureBookmarksItem0Status[];
  type?: App2FeatureBookmarksItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureBookmarksItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureBookmarksItem0Model implements IApp2FeatureBookmarksItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureBookmarksItem0Status = undefined as any;
  enabled: App2FeatureBookmarksItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2FeatureBookmarksItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureBookmarksItem0 {
    return { ...this } as IApp2FeatureBookmarksItem0;
  }

  clone(): App2FeatureBookmarksItem0Model {
    return new App2FeatureBookmarksItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}