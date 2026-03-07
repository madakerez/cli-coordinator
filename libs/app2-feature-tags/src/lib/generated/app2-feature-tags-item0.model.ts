export enum App2FeatureTagsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureTagsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureTagsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureTagsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureTagsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureTagsItem0Status;
  enabled: App2FeatureTagsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureTagsItem0ListResponse {
  items: IApp2FeatureTagsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureTagsItem0Filter {
  query?: string;
  status?: App2FeatureTagsItem0Status[];
  type?: App2FeatureTagsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureTagsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureTagsItem0Model implements IApp2FeatureTagsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureTagsItem0Status = undefined as any;
  enabled: App2FeatureTagsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2FeatureTagsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureTagsItem0 {
    return { ...this } as IApp2FeatureTagsItem0;
  }

  clone(): App2FeatureTagsItem0Model {
    return new App2FeatureTagsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}