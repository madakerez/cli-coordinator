export enum SharedNotificationsItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem15Status;
  enabled: SharedNotificationsItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem15Status;
}

export interface ISharedNotificationsItem15ListResponse {
  items: ISharedNotificationsItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem15Filter {
  query?: string;
  status?: SharedNotificationsItem15Status[];
  type?: SharedNotificationsItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem15;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem15Model implements ISharedNotificationsItem15 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem15Status = undefined as any;
  enabled: SharedNotificationsItem15Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedNotificationsItem15Status = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem15>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem15 {
    return { ...this } as ISharedNotificationsItem15;
  }

  clone(): SharedNotificationsItem15Model {
    return new SharedNotificationsItem15Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}