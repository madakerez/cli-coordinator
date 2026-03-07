export enum App3FeatureMediaItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3FeatureMediaItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3FeatureMediaItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3FeatureMediaItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3FeatureMediaItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3FeatureMediaItem1Status;
  enabled: App3FeatureMediaItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp3FeatureMediaItem1ListResponse {
  items: IApp3FeatureMediaItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3FeatureMediaItem1Filter {
  query?: string;
  status?: App3FeatureMediaItem1Status[];
  type?: App3FeatureMediaItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3FeatureMediaItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App3FeatureMediaItem1Model implements IApp3FeatureMediaItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3FeatureMediaItem1Status = undefined as any;
  enabled: App3FeatureMediaItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp3FeatureMediaItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3FeatureMediaItem1 {
    return { ...this } as IApp3FeatureMediaItem1;
  }

  clone(): App3FeatureMediaItem1Model {
    return new App3FeatureMediaItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}