export enum SharedPermissionsItem12Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedPermissionsItem12Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedPermissionsItem12Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedPermissionsItem12Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedPermissionsItem12 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedPermissionsItem12Status;
  enabled: SharedPermissionsItem12Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedPermissionsItem12ListResponse {
  items: ISharedPermissionsItem12[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedPermissionsItem12Filter {
  query?: string;
  status?: SharedPermissionsItem12Status[];
  type?: SharedPermissionsItem12Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedPermissionsItem12;
  sortOrder?: 'asc' | 'desc';
}

export class SharedPermissionsItem12Model implements ISharedPermissionsItem12 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedPermissionsItem12Status = undefined as any;
  enabled: SharedPermissionsItem12Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedPermissionsItem12>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedPermissionsItem12 {
    return { ...this } as ISharedPermissionsItem12;
  }

  clone(): SharedPermissionsItem12Model {
    return new SharedPermissionsItem12Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}