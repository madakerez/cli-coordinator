export enum SharedNotificationsItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem6Status;
  enabled: SharedNotificationsItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem6Status;
  category?: SharedNotificationsItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedNotificationsItem6ListResponse {
  items: ISharedNotificationsItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem6Filter {
  query?: string;
  status?: SharedNotificationsItem6Status[];
  type?: SharedNotificationsItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem6;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem6Model implements ISharedNotificationsItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem6Status = undefined as any;
  enabled: SharedNotificationsItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedNotificationsItem6Status = undefined as any;
  category: SharedNotificationsItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem6 {
    return { ...this } as ISharedNotificationsItem6;
  }

  clone(): SharedNotificationsItem6Model {
    return new SharedNotificationsItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}