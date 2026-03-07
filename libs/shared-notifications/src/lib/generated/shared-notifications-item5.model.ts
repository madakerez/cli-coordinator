export enum SharedNotificationsItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem5Status;
  enabled: SharedNotificationsItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem5Status;
  category?: SharedNotificationsItem5Type;
  tags?: string;
}

export interface ISharedNotificationsItem5ListResponse {
  items: ISharedNotificationsItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem5Filter {
  query?: string;
  status?: SharedNotificationsItem5Status[];
  type?: SharedNotificationsItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem5;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem5Model implements ISharedNotificationsItem5 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem5Status = undefined as any;
  enabled: SharedNotificationsItem5Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedNotificationsItem5Status = undefined as any;
  category: SharedNotificationsItem5Type = undefined as any;
  tags: string = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem5>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem5 {
    return { ...this } as ISharedNotificationsItem5;
  }

  clone(): SharedNotificationsItem5Model {
    return new SharedNotificationsItem5Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}