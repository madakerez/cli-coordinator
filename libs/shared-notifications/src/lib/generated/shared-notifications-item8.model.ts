export enum SharedNotificationsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem8Status;
  enabled: SharedNotificationsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem8Status;
  category?: SharedNotificationsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedNotificationsItem8ListResponse {
  items: ISharedNotificationsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem8Filter {
  query?: string;
  status?: SharedNotificationsItem8Status[];
  type?: SharedNotificationsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem8;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem8Model implements ISharedNotificationsItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem8Status = undefined as any;
  enabled: SharedNotificationsItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedNotificationsItem8Status = undefined as any;
  category: SharedNotificationsItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem8 {
    return { ...this } as ISharedNotificationsItem8;
  }

  clone(): SharedNotificationsItem8Model {
    return new SharedNotificationsItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}