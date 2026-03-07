export enum SharedPermissionsItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedPermissionsItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedPermissionsItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedPermissionsItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedPermissionsItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedPermissionsItem6Status;
  enabled: SharedPermissionsItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedPermissionsItem6Status;
  category?: SharedPermissionsItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedPermissionsItem6ListResponse {
  items: ISharedPermissionsItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedPermissionsItem6Filter {
  query?: string;
  status?: SharedPermissionsItem6Status[];
  type?: SharedPermissionsItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedPermissionsItem6;
  sortOrder?: 'asc' | 'desc';
}

export class SharedPermissionsItem6Model implements ISharedPermissionsItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedPermissionsItem6Status = undefined as any;
  enabled: SharedPermissionsItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedPermissionsItem6Status = undefined as any;
  category: SharedPermissionsItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<ISharedPermissionsItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedPermissionsItem6 {
    return { ...this } as ISharedPermissionsItem6;
  }

  clone(): SharedPermissionsItem6Model {
    return new SharedPermissionsItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}