export enum App4FeatureMonitoringItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureMonitoringItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureMonitoringItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureMonitoringItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureMonitoringItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureMonitoringItem0Status;
  enabled: App4FeatureMonitoringItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureMonitoringItem0ListResponse {
  items: IApp4FeatureMonitoringItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureMonitoringItem0Filter {
  query?: string;
  status?: App4FeatureMonitoringItem0Status[];
  type?: App4FeatureMonitoringItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureMonitoringItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureMonitoringItem0Model implements IApp4FeatureMonitoringItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureMonitoringItem0Status = undefined as any;
  enabled: App4FeatureMonitoringItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureMonitoringItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureMonitoringItem0 {
    return { ...this } as IApp4FeatureMonitoringItem0;
  }

  clone(): App4FeatureMonitoringItem0Model {
    return new App4FeatureMonitoringItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}