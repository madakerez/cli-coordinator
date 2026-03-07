export enum App4FeatureNotificationsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureNotificationsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureNotificationsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureNotificationsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureNotificationsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureNotificationsItem8Status;
  enabled: App4FeatureNotificationsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4FeatureNotificationsItem8Status;
  category?: App4FeatureNotificationsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface IApp4FeatureNotificationsItem8ListResponse {
  items: IApp4FeatureNotificationsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureNotificationsItem8Filter {
  query?: string;
  status?: App4FeatureNotificationsItem8Status[];
  type?: App4FeatureNotificationsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureNotificationsItem8;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureNotificationsItem8Model implements IApp4FeatureNotificationsItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureNotificationsItem8Status = undefined as any;
  enabled: App4FeatureNotificationsItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4FeatureNotificationsItem8Status = undefined as any;
  category: App4FeatureNotificationsItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<IApp4FeatureNotificationsItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureNotificationsItem8 {
    return { ...this } as IApp4FeatureNotificationsItem8;
  }

  clone(): App4FeatureNotificationsItem8Model {
    return new App4FeatureNotificationsItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}