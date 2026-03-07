export enum SharedPermissionsItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedPermissionsItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedPermissionsItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedPermissionsItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedPermissionsItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedPermissionsItem13Status;
  enabled: SharedPermissionsItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedPermissionsItem13ListResponse {
  items: ISharedPermissionsItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedPermissionsItem13Filter {
  query?: string;
  status?: SharedPermissionsItem13Status[];
  type?: SharedPermissionsItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedPermissionsItem13;
  sortOrder?: 'asc' | 'desc';
}

export class SharedPermissionsItem13Model implements ISharedPermissionsItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedPermissionsItem13Status = undefined as any;
  enabled: SharedPermissionsItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedPermissionsItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedPermissionsItem13 {
    return { ...this } as ISharedPermissionsItem13;
  }

  clone(): SharedPermissionsItem13Model {
    return new SharedPermissionsItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}