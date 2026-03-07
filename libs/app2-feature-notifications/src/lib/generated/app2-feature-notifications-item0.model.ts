export enum App2FeatureNotificationsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureNotificationsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureNotificationsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureNotificationsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureNotificationsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureNotificationsItem0Status;
  enabled: App2FeatureNotificationsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureNotificationsItem0ListResponse {
  items: IApp2FeatureNotificationsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureNotificationsItem0Filter {
  query?: string;
  status?: App2FeatureNotificationsItem0Status[];
  type?: App2FeatureNotificationsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureNotificationsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureNotificationsItem0Model implements IApp2FeatureNotificationsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureNotificationsItem0Status = undefined as any;
  enabled: App2FeatureNotificationsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2FeatureNotificationsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureNotificationsItem0 {
    return { ...this } as IApp2FeatureNotificationsItem0;
  }

  clone(): App2FeatureNotificationsItem0Model {
    return new App2FeatureNotificationsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}