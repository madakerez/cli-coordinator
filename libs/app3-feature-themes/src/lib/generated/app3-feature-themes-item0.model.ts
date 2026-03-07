export enum App3FeatureThemesItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3FeatureThemesItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3FeatureThemesItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3FeatureThemesItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3FeatureThemesItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3FeatureThemesItem0Status;
  enabled: App3FeatureThemesItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp3FeatureThemesItem0ListResponse {
  items: IApp3FeatureThemesItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3FeatureThemesItem0Filter {
  query?: string;
  status?: App3FeatureThemesItem0Status[];
  type?: App3FeatureThemesItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3FeatureThemesItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App3FeatureThemesItem0Model implements IApp3FeatureThemesItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3FeatureThemesItem0Status = undefined as any;
  enabled: App3FeatureThemesItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp3FeatureThemesItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3FeatureThemesItem0 {
    return { ...this } as IApp3FeatureThemesItem0;
  }

  clone(): App3FeatureThemesItem0Model {
    return new App3FeatureThemesItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}