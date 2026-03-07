export enum App1FeatureNotificationsItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureNotificationsItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureNotificationsItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureNotificationsItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureNotificationsItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureNotificationsItem14Status;
  enabled: App1FeatureNotificationsItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp1FeatureNotificationsItem14ListResponse {
  items: IApp1FeatureNotificationsItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureNotificationsItem14Filter {
  query?: string;
  status?: App1FeatureNotificationsItem14Status[];
  type?: App1FeatureNotificationsItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureNotificationsItem14;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureNotificationsItem14Model implements IApp1FeatureNotificationsItem14 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureNotificationsItem14Status = undefined as any;
  enabled: App1FeatureNotificationsItem14Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<IApp1FeatureNotificationsItem14>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureNotificationsItem14 {
    return { ...this } as IApp1FeatureNotificationsItem14;
  }

  clone(): App1FeatureNotificationsItem14Model {
    return new App1FeatureNotificationsItem14Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}