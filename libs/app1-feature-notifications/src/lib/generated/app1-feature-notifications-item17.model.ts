export enum App1FeatureNotificationsItem17Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureNotificationsItem17Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureNotificationsItem17Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureNotificationsItem17Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureNotificationsItem17 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureNotificationsItem17Status;
  enabled: App1FeatureNotificationsItem17Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureNotificationsItem17Status;
  category?: App1FeatureNotificationsItem17Type;
  tags?: string;
}

export interface IApp1FeatureNotificationsItem17ListResponse {
  items: IApp1FeatureNotificationsItem17[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureNotificationsItem17Filter {
  query?: string;
  status?: App1FeatureNotificationsItem17Status[];
  type?: App1FeatureNotificationsItem17Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureNotificationsItem17;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureNotificationsItem17Model implements IApp1FeatureNotificationsItem17 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureNotificationsItem17Status = undefined as any;
  enabled: App1FeatureNotificationsItem17Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureNotificationsItem17Status = undefined as any;
  category: App1FeatureNotificationsItem17Type = undefined as any;
  tags: string = undefined as any;

  constructor(data?: Partial<IApp1FeatureNotificationsItem17>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureNotificationsItem17 {
    return { ...this } as IApp1FeatureNotificationsItem17;
  }

  clone(): App1FeatureNotificationsItem17Model {
    return new App1FeatureNotificationsItem17Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}