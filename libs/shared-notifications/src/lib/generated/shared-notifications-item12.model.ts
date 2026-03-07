export enum SharedNotificationsItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem12Status;
  enabled: SharedNotificationsItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedNotificationsItem12ListResponse {
  items: ISharedNotificationsItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem12Filter {
  query?: string;
  status?: SharedNotificationsItem12Status[];
  type?: SharedNotificationsItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem12;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem12Model implements ISharedNotificationsItem12 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem12Status = undefined as any;
  enabled: SharedNotificationsItem12Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem12>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem12 {
    return { ...this } as ISharedNotificationsItem12;
  }

  clone(): SharedNotificationsItem12Model {
    return new SharedNotificationsItem12Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}