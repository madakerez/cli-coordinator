export enum SharedNotificationsItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedNotificationsItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedNotificationsItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedNotificationsItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedNotificationsItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedNotificationsItem2Status;
  enabled: SharedNotificationsItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedNotificationsItem2ListResponse {
  items: ISharedNotificationsItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedNotificationsItem2Filter {
  query?: string;
  status?: SharedNotificationsItem2Status[];
  type?: SharedNotificationsItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedNotificationsItem2;
  sortOrder?: 'asc' | 'desc';
}

export class SharedNotificationsItem2Model implements ISharedNotificationsItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedNotificationsItem2Status = undefined as any;
  enabled: SharedNotificationsItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedNotificationsItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedNotificationsItem2 {
    return { ...this } as ISharedNotificationsItem2;
  }

  clone(): SharedNotificationsItem2Model {
    return new SharedNotificationsItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}