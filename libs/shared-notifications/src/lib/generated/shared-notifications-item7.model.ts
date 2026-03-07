export enum SharedNotificationsItem7Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem7Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem7Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem7Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem7 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem7Status;
  enabled: SharedNotificationsItem7Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem7Status;
  category?: SharedNotificationsItem7Type;
  tags?: string;
  config?: number;
  options?: boolean;
}

export interface ISharedNotificationsItem7ListResponse {
  items: ISharedNotificationsItem7[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem7Filter {
  query?: string;
  status?: SharedNotificationsItem7Status[];
  type?: SharedNotificationsItem7Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem7;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem7Model implements ISharedNotificationsItem7 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem7Status = undefined as any;
  enabled: SharedNotificationsItem7Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedNotificationsItem7Status = undefined as any;
  category: SharedNotificationsItem7Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem7>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem7 {
    return { ...this } as ISharedNotificationsItem7;
  }

  clone(): SharedNotificationsItem7Model {
    return new SharedNotificationsItem7Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}