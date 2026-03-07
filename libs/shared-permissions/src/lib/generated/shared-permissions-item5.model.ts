export enum SharedPermissionsItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedPermissionsItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedPermissionsItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedPermissionsItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedPermissionsItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedPermissionsItem5Status;
  enabled: SharedPermissionsItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedPermissionsItem5Status;
  category?: SharedPermissionsItem5Type;
  tags?: string;
}

export interface ISharedPermissionsItem5ListResponse {
  items: ISharedPermissionsItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedPermissionsItem5Filter {
  query?: string;
  status?: SharedPermissionsItem5Status[];
  type?: SharedPermissionsItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedPermissionsItem5;
  sortOrder?: 'asc' | 'desc';
}

export class SharedPermissionsItem5Model implements ISharedPermissionsItem5 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedPermissionsItem5Status = undefined as any;
  enabled: SharedPermissionsItem5Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedPermissionsItem5Status = undefined as any;
  category: SharedPermissionsItem5Type = undefined as any;
  tags: string = undefined as any;

  constructor(data?: Partial<ISharedPermissionsItem5>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedPermissionsItem5 {
    return { ...this } as ISharedPermissionsItem5;
  }

  clone(): SharedPermissionsItem5Model {
    return new SharedPermissionsItem5Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}