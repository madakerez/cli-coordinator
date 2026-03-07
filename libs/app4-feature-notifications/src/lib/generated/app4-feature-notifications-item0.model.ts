export enum App4FeatureNotificationsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureNotificationsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureNotificationsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureNotificationsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureNotificationsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureNotificationsItem0Status;
  enabled: App4FeatureNotificationsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureNotificationsItem0ListResponse {
  items: IApp4FeatureNotificationsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureNotificationsItem0Filter {
  query?: string;
  status?: App4FeatureNotificationsItem0Status[];
  type?: App4FeatureNotificationsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureNotificationsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureNotificationsItem0Model implements IApp4FeatureNotificationsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureNotificationsItem0Status = undefined as any;
  enabled: App4FeatureNotificationsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureNotificationsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureNotificationsItem0 {
    return { ...this } as IApp4FeatureNotificationsItem0;
  }

  clone(): App4FeatureNotificationsItem0Model {
    return new App4FeatureNotificationsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}