export enum App3FeaturePluginsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3FeaturePluginsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3FeaturePluginsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3FeaturePluginsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3FeaturePluginsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3FeaturePluginsItem0Status;
  enabled: App3FeaturePluginsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp3FeaturePluginsItem0ListResponse {
  items: IApp3FeaturePluginsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3FeaturePluginsItem0Filter {
  query?: string;
  status?: App3FeaturePluginsItem0Status[];
  type?: App3FeaturePluginsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3FeaturePluginsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App3FeaturePluginsItem0Model implements IApp3FeaturePluginsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3FeaturePluginsItem0Status = undefined as any;
  enabled: App3FeaturePluginsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp3FeaturePluginsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3FeaturePluginsItem0 {
    return { ...this } as IApp3FeaturePluginsItem0;
  }

  clone(): App3FeaturePluginsItem0Model {
    return new App3FeaturePluginsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}