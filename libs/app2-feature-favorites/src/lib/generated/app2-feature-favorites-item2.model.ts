export enum App2FeatureFavoritesItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureFavoritesItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureFavoritesItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureFavoritesItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureFavoritesItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureFavoritesItem2Status;
  enabled: App2FeatureFavoritesItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp2FeatureFavoritesItem2ListResponse {
  items: IApp2FeatureFavoritesItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureFavoritesItem2Filter {
  query?: string;
  status?: App2FeatureFavoritesItem2Status[];
  type?: App2FeatureFavoritesItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureFavoritesItem2;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureFavoritesItem2Model implements IApp2FeatureFavoritesItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureFavoritesItem2Status = undefined as any;
  enabled: App2FeatureFavoritesItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<IApp2FeatureFavoritesItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureFavoritesItem2 {
    return { ...this } as IApp2FeatureFavoritesItem2;
  }

  clone(): App2FeatureFavoritesItem2Model {
    return new App2FeatureFavoritesItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}