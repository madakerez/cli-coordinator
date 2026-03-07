export enum App4FeatureIntegrationsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureIntegrationsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureIntegrationsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureIntegrationsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureIntegrationsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureIntegrationsItem0Status;
  enabled: App4FeatureIntegrationsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureIntegrationsItem0ListResponse {
  items: IApp4FeatureIntegrationsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureIntegrationsItem0Filter {
  query?: string;
  status?: App4FeatureIntegrationsItem0Status[];
  type?: App4FeatureIntegrationsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureIntegrationsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureIntegrationsItem0Model implements IApp4FeatureIntegrationsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureIntegrationsItem0Status = undefined as any;
  enabled: App4FeatureIntegrationsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureIntegrationsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureIntegrationsItem0 {
    return { ...this } as IApp4FeatureIntegrationsItem0;
  }

  clone(): App4FeatureIntegrationsItem0Model {
    return new App4FeatureIntegrationsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}