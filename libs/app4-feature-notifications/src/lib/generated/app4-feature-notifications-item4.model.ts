export enum App4FeatureNotificationsItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureNotificationsItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureNotificationsItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureNotificationsItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureNotificationsItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureNotificationsItem4Status;
  enabled: App4FeatureNotificationsItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4FeatureNotificationsItem4Status;
  category?: App4FeatureNotificationsItem4Type;
}

export interface IApp4FeatureNotificationsItem4ListResponse {
  items: IApp4FeatureNotificationsItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureNotificationsItem4Filter {
  query?: string;
  status?: App4FeatureNotificationsItem4Status[];
  type?: App4FeatureNotificationsItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureNotificationsItem4;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureNotificationsItem4Model implements IApp4FeatureNotificationsItem4 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureNotificationsItem4Status = undefined as any;
  enabled: App4FeatureNotificationsItem4Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4FeatureNotificationsItem4Status = undefined as any;
  category: App4FeatureNotificationsItem4Type = undefined as any;

  constructor(data?: Partial<IApp4FeatureNotificationsItem4>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureNotificationsItem4 {
    return { ...this } as IApp4FeatureNotificationsItem4;
  }

  clone(): App4FeatureNotificationsItem4Model {
    return new App4FeatureNotificationsItem4Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}