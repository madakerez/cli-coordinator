export enum App3FeatureMediaItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3FeatureMediaItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3FeatureMediaItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3FeatureMediaItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3FeatureMediaItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3FeatureMediaItem0Status;
  enabled: App3FeatureMediaItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp3FeatureMediaItem0ListResponse {
  items: IApp3FeatureMediaItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3FeatureMediaItem0Filter {
  query?: string;
  status?: App3FeatureMediaItem0Status[];
  type?: App3FeatureMediaItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3FeatureMediaItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App3FeatureMediaItem0Model implements IApp3FeatureMediaItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3FeatureMediaItem0Status = undefined as any;
  enabled: App3FeatureMediaItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp3FeatureMediaItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3FeatureMediaItem0 {
    return { ...this } as IApp3FeatureMediaItem0;
  }

  clone(): App3FeatureMediaItem0Model {
    return new App3FeatureMediaItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}