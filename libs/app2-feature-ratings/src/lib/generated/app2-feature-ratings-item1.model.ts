export enum App2FeatureRatingsItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureRatingsItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureRatingsItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureRatingsItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureRatingsItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureRatingsItem1Status;
  enabled: App2FeatureRatingsItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp2FeatureRatingsItem1ListResponse {
  items: IApp2FeatureRatingsItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureRatingsItem1Filter {
  query?: string;
  status?: App2FeatureRatingsItem1Status[];
  type?: App2FeatureRatingsItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureRatingsItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureRatingsItem1Model implements IApp2FeatureRatingsItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureRatingsItem1Status = undefined as any;
  enabled: App2FeatureRatingsItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp2FeatureRatingsItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureRatingsItem1 {
    return { ...this } as IApp2FeatureRatingsItem1;
  }

  clone(): App2FeatureRatingsItem1Model {
    return new App2FeatureRatingsItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}