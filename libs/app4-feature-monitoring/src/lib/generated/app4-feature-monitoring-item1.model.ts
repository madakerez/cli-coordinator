export enum App4FeatureMonitoringItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureMonitoringItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureMonitoringItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureMonitoringItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureMonitoringItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureMonitoringItem1Status;
  enabled: App4FeatureMonitoringItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4FeatureMonitoringItem1ListResponse {
  items: IApp4FeatureMonitoringItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureMonitoringItem1Filter {
  query?: string;
  status?: App4FeatureMonitoringItem1Status[];
  type?: App4FeatureMonitoringItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureMonitoringItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureMonitoringItem1Model implements IApp4FeatureMonitoringItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureMonitoringItem1Status = undefined as any;
  enabled: App4FeatureMonitoringItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp4FeatureMonitoringItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureMonitoringItem1 {
    return { ...this } as IApp4FeatureMonitoringItem1;
  }

  clone(): App4FeatureMonitoringItem1Model {
    return new App4FeatureMonitoringItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}