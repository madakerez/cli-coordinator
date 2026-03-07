export enum SharedNotificationsItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem1Status;
  enabled: SharedNotificationsItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedNotificationsItem1ListResponse {
  items: ISharedNotificationsItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem1Filter {
  query?: string;
  status?: SharedNotificationsItem1Status[];
  type?: SharedNotificationsItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem1;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem1Model implements ISharedNotificationsItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem1Status = undefined as any;
  enabled: SharedNotificationsItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem1 {
    return { ...this } as ISharedNotificationsItem1;
  }

  clone(): SharedNotificationsItem1Model {
    return new SharedNotificationsItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}