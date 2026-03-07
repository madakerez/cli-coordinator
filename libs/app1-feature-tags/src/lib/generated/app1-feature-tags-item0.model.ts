export enum App1FeatureTagsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureTagsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureTagsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureTagsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureTagsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureTagsItem0Status;
  enabled: App1FeatureTagsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp1FeatureTagsItem0ListResponse {
  items: IApp1FeatureTagsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureTagsItem0Filter {
  query?: string;
  status?: App1FeatureTagsItem0Status[];
  type?: App1FeatureTagsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureTagsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureTagsItem0Model implements IApp1FeatureTagsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureTagsItem0Status = undefined as any;
  enabled: App1FeatureTagsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp1FeatureTagsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureTagsItem0 {
    return { ...this } as IApp1FeatureTagsItem0;
  }

  clone(): App1FeatureTagsItem0Model {
    return new App1FeatureTagsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}