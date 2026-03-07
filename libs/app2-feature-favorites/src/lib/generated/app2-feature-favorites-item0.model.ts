export enum App2FeatureFavoritesItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureFavoritesItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureFavoritesItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureFavoritesItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureFavoritesItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureFavoritesItem0Status;
  enabled: App2FeatureFavoritesItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureFavoritesItem0ListResponse {
  items: IApp2FeatureFavoritesItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureFavoritesItem0Filter {
  query?: string;
  status?: App2FeatureFavoritesItem0Status[];
  type?: App2FeatureFavoritesItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureFavoritesItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureFavoritesItem0Model implements IApp2FeatureFavoritesItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureFavoritesItem0Status = undefined as any;
  enabled: App2FeatureFavoritesItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2FeatureFavoritesItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureFavoritesItem0 {
    return { ...this } as IApp2FeatureFavoritesItem0;
  }

  clone(): App2FeatureFavoritesItem0Model {
    return new App2FeatureFavoritesItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}