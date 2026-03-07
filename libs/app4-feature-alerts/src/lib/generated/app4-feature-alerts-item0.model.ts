export enum App4FeatureAlertsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureAlertsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureAlertsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureAlertsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureAlertsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureAlertsItem0Status;
  enabled: App4FeatureAlertsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureAlertsItem0ListResponse {
  items: IApp4FeatureAlertsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureAlertsItem0Filter {
  query?: string;
  status?: App4FeatureAlertsItem0Status[];
  type?: App4FeatureAlertsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureAlertsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureAlertsItem0Model implements IApp4FeatureAlertsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureAlertsItem0Status = undefined as any;
  enabled: App4FeatureAlertsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureAlertsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureAlertsItem0 {
    return { ...this } as IApp4FeatureAlertsItem0;
  }

  clone(): App4FeatureAlertsItem0Model {
    return new App4FeatureAlertsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}