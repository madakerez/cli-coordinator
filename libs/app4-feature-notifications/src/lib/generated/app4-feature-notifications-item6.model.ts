export enum App4FeatureNotificationsItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureNotificationsItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureNotificationsItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureNotificationsItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureNotificationsItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureNotificationsItem6Status;
  enabled: App4FeatureNotificationsItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4FeatureNotificationsItem6Status;
  category?: App4FeatureNotificationsItem6Type;
  tags?: string;
  config?: number;
}

export interface IApp4FeatureNotificationsItem6ListResponse {
  items: IApp4FeatureNotificationsItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureNotificationsItem6Filter {
  query?: string;
  status?: App4FeatureNotificationsItem6Status[];
  type?: App4FeatureNotificationsItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureNotificationsItem6;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureNotificationsItem6Model implements IApp4FeatureNotificationsItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureNotificationsItem6Status = undefined as any;
  enabled: App4FeatureNotificationsItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4FeatureNotificationsItem6Status = undefined as any;
  category: App4FeatureNotificationsItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureNotificationsItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureNotificationsItem6 {
    return { ...this } as IApp4FeatureNotificationsItem6;
  }

  clone(): App4FeatureNotificationsItem6Model {
    return new App4FeatureNotificationsItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}