export enum App1FeatureNotificationsItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureNotificationsItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureNotificationsItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureNotificationsItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureNotificationsItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureNotificationsItem15Status;
  enabled: App1FeatureNotificationsItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureNotificationsItem15Status;
}

export interface IApp1FeatureNotificationsItem15ListResponse {
  items: IApp1FeatureNotificationsItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureNotificationsItem15Filter {
  query?: string;
  status?: App1FeatureNotificationsItem15Status[];
  type?: App1FeatureNotificationsItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureNotificationsItem15;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureNotificationsItem15Model implements IApp1FeatureNotificationsItem15 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureNotificationsItem15Status = undefined as any;
  enabled: App1FeatureNotificationsItem15Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureNotificationsItem15Status = undefined as any;

  constructor(data?: Partial<IApp1FeatureNotificationsItem15>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureNotificationsItem15 {
    return { ...this } as IApp1FeatureNotificationsItem15;
  }

  clone(): App1FeatureNotificationsItem15Model {
    return new App1FeatureNotificationsItem15Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}