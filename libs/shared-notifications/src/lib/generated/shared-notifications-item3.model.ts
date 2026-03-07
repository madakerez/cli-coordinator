export enum SharedNotificationsItem3Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem3Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem3Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem3Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem3 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem3Status;
  enabled: SharedNotificationsItem3Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem3Status;
}

export interface ISharedNotificationsItem3ListResponse {
  items: ISharedNotificationsItem3[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem3Filter {
  query?: string;
  status?: SharedNotificationsItem3Status[];
  type?: SharedNotificationsItem3Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem3;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem3Model implements ISharedNotificationsItem3 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem3Status = undefined as any;
  enabled: SharedNotificationsItem3Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedNotificationsItem3Status = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem3>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem3 {
    return { ...this } as ISharedNotificationsItem3;
  }

  clone(): SharedNotificationsItem3Model {
    return new SharedNotificationsItem3Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}