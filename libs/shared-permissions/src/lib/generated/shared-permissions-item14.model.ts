export enum SharedPermissionsItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedPermissionsItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedPermissionsItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedPermissionsItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedPermissionsItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedPermissionsItem14Status;
  enabled: SharedPermissionsItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedPermissionsItem14ListResponse {
  items: ISharedPermissionsItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedPermissionsItem14Filter {
  query?: string;
  status?: SharedPermissionsItem14Status[];
  type?: SharedPermissionsItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedPermissionsItem14;
  sortOrder?: 'asc' | 'desc';
}

export class SharedPermissionsItem14Model implements ISharedPermissionsItem14 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedPermissionsItem14Status = undefined as any;
  enabled: SharedPermissionsItem14Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedPermissionsItem14>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedPermissionsItem14 {
    return { ...this } as ISharedPermissionsItem14;
  }

  clone(): SharedPermissionsItem14Model {
    return new SharedPermissionsItem14Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}