export enum App4FeatureSchedulerItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureSchedulerItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureSchedulerItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureSchedulerItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureSchedulerItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureSchedulerItem0Status;
  enabled: App4FeatureSchedulerItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureSchedulerItem0ListResponse {
  items: IApp4FeatureSchedulerItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureSchedulerItem0Filter {
  query?: string;
  status?: App4FeatureSchedulerItem0Status[];
  type?: App4FeatureSchedulerItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureSchedulerItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureSchedulerItem0Model implements IApp4FeatureSchedulerItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureSchedulerItem0Status = undefined as any;
  enabled: App4FeatureSchedulerItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureSchedulerItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureSchedulerItem0 {
    return { ...this } as IApp4FeatureSchedulerItem0;
  }

  clone(): App4FeatureSchedulerItem0Model {
    return new App4FeatureSchedulerItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}