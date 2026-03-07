export enum SharedPermissionsItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedPermissionsItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedPermissionsItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedPermissionsItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedPermissionsItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedPermissionsItem2Status;
  enabled: SharedPermissionsItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface ISharedPermissionsItem2ListResponse {
  items: ISharedPermissionsItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedPermissionsItem2Filter {
  query?: string;
  status?: SharedPermissionsItem2Status[];
  type?: SharedPermissionsItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedPermissionsItem2;
  sortOrder?: 'asc' | 'desc';
}

export class SharedPermissionsItem2Model implements ISharedPermissionsItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedPermissionsItem2Status = undefined as any;
  enabled: SharedPermissionsItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<ISharedPermissionsItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedPermissionsItem2 {
    return { ...this } as ISharedPermissionsItem2;
  }

  clone(): SharedPermissionsItem2Model {
    return new SharedPermissionsItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}