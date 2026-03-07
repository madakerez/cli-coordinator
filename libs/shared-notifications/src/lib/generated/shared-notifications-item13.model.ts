export enum SharedNotificationsItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem13Status;
  enabled: SharedNotificationsItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedNotificationsItem13ListResponse {
  items: ISharedNotificationsItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem13Filter {
  query?: string;
  status?: SharedNotificationsItem13Status[];
  type?: SharedNotificationsItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem13;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem13Model implements ISharedNotificationsItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem13Status = undefined as any;
  enabled: SharedNotificationsItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem13 {
    return { ...this } as ISharedNotificationsItem13;
  }

  clone(): SharedNotificationsItem13Model {
    return new SharedNotificationsItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}