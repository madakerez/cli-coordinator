export enum SharedNotificationsItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem14Status;
  enabled: SharedNotificationsItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedNotificationsItem14ListResponse {
  items: ISharedNotificationsItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem14Filter {
  query?: string;
  status?: SharedNotificationsItem14Status[];
  type?: SharedNotificationsItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem14;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem14Model implements ISharedNotificationsItem14 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem14Status = undefined as any;
  enabled: SharedNotificationsItem14Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem14>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem14 {
    return { ...this } as ISharedNotificationsItem14;
  }

  clone(): SharedNotificationsItem14Model {
    return new SharedNotificationsItem14Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}