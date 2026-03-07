export enum SharedNotificationsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem0Status;
  enabled: SharedNotificationsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedNotificationsItem0ListResponse {
  items: ISharedNotificationsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem0Filter {
  query?: string;
  status?: SharedNotificationsItem0Status[];
  type?: SharedNotificationsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem0Model implements ISharedNotificationsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem0Status = undefined as any;
  enabled: SharedNotificationsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem0 {
    return { ...this } as ISharedNotificationsItem0;
  }

  clone(): SharedNotificationsItem0Model {
    return new SharedNotificationsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}