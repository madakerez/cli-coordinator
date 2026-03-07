export enum SharedNotificationsItem4Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem4Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem4Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem4Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem4 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem4Status;
  enabled: SharedNotificationsItem4Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem4Status;
  category?: SharedNotificationsItem4Type;
}

export interface ISharedNotificationsItem4ListResponse {
  items: ISharedNotificationsItem4[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem4Filter {
  query?: string;
  status?: SharedNotificationsItem4Status[];
  type?: SharedNotificationsItem4Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem4;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem4Model implements ISharedNotificationsItem4 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem4Status = undefined as any;
  enabled: SharedNotificationsItem4Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedNotificationsItem4Status = undefined as any;
  category: SharedNotificationsItem4Type = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem4>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem4 {
    return { ...this } as ISharedNotificationsItem4;
  }

  clone(): SharedNotificationsItem4Model {
    return new SharedNotificationsItem4Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}