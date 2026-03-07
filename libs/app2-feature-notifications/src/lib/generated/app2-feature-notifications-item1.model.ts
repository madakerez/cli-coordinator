export enum App2FeatureNotificationsItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureNotificationsItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureNotificationsItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureNotificationsItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureNotificationsItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureNotificationsItem1Status;
  enabled: App2FeatureNotificationsItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp2FeatureNotificationsItem1ListResponse {
  items: IApp2FeatureNotificationsItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureNotificationsItem1Filter {
  query?: string;
  status?: App2FeatureNotificationsItem1Status[];
  type?: App2FeatureNotificationsItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureNotificationsItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureNotificationsItem1Model implements IApp2FeatureNotificationsItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureNotificationsItem1Status = undefined as any;
  enabled: App2FeatureNotificationsItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp2FeatureNotificationsItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureNotificationsItem1 {
    return { ...this } as IApp2FeatureNotificationsItem1;
  }

  clone(): App2FeatureNotificationsItem1Model {
    return new App2FeatureNotificationsItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}