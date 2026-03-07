export enum SharedNotificationsItem9Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem9Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem9Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem9Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem9 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem9Status;
  enabled: SharedNotificationsItem9Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedNotificationsItem9Status;
  category?: SharedNotificationsItem9Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
  ownerId?: SharedNotificationsItem9Status;
}

export interface ISharedNotificationsItem9ListResponse {
  items: ISharedNotificationsItem9[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem9Filter {
  query?: string;
  status?: SharedNotificationsItem9Status[];
  type?: SharedNotificationsItem9Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem9;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem9Model implements ISharedNotificationsItem9 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem9Status = undefined as any;
  enabled: SharedNotificationsItem9Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedNotificationsItem9Status = undefined as any;
  category: SharedNotificationsItem9Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;
  ownerId: SharedNotificationsItem9Status = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem9>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem9 {
    return { ...this } as ISharedNotificationsItem9;
  }

  clone(): SharedNotificationsItem9Model {
    return new SharedNotificationsItem9Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}