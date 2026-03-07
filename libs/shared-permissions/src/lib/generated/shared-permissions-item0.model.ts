export enum SharedPermissionsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedPermissionsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedPermissionsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedPermissionsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedPermissionsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedPermissionsItem0Status;
  enabled: SharedPermissionsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedPermissionsItem0ListResponse {
  items: ISharedPermissionsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedPermissionsItem0Filter {
  query?: string;
  status?: SharedPermissionsItem0Status[];
  type?: SharedPermissionsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedPermissionsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedPermissionsItem0Model implements ISharedPermissionsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedPermissionsItem0Status = undefined as any;
  enabled: SharedPermissionsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedPermissionsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedPermissionsItem0 {
    return { ...this } as ISharedPermissionsItem0;
  }

  clone(): SharedPermissionsItem0Model {
    return new SharedPermissionsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}