export enum App4FeatureNotificationsItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureNotificationsItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureNotificationsItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureNotificationsItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureNotificationsItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureNotificationsItem2Status;
  enabled: App4FeatureNotificationsItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp4FeatureNotificationsItem2ListResponse {
  items: IApp4FeatureNotificationsItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureNotificationsItem2Filter {
  query?: string;
  status?: App4FeatureNotificationsItem2Status[];
  type?: App4FeatureNotificationsItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureNotificationsItem2;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureNotificationsItem2Model implements IApp4FeatureNotificationsItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureNotificationsItem2Status = undefined as any;
  enabled: App4FeatureNotificationsItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<IApp4FeatureNotificationsItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureNotificationsItem2 {
    return { ...this } as IApp4FeatureNotificationsItem2;
  }

  clone(): App4FeatureNotificationsItem2Model {
    return new App4FeatureNotificationsItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}