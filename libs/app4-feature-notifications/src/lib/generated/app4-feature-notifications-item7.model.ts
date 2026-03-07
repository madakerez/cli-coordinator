export enum App4FeatureNotificationsItem7Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureNotificationsItem7Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureNotificationsItem7Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureNotificationsItem7Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureNotificationsItem7 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureNotificationsItem7Status;
  enabled: App4FeatureNotificationsItem7Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4FeatureNotificationsItem7Status;
  category?: App4FeatureNotificationsItem7Type;
  tags?: string;
  config?: number;
  options?: boolean;
}

export interface IApp4FeatureNotificationsItem7ListResponse {
  items: IApp4FeatureNotificationsItem7[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureNotificationsItem7Filter {
  query?: string;
  status?: App4FeatureNotificationsItem7Status[];
  type?: App4FeatureNotificationsItem7Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureNotificationsItem7;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureNotificationsItem7Model implements IApp4FeatureNotificationsItem7 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureNotificationsItem7Status = undefined as any;
  enabled: App4FeatureNotificationsItem7Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4FeatureNotificationsItem7Status = undefined as any;
  category: App4FeatureNotificationsItem7Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;

  constructor(data?: Partial<IApp4FeatureNotificationsItem7>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureNotificationsItem7 {
    return { ...this } as IApp4FeatureNotificationsItem7;
  }

  clone(): App4FeatureNotificationsItem7Model {
    return new App4FeatureNotificationsItem7Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}