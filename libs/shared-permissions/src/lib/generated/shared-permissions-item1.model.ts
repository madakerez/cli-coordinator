export enum SharedPermissionsItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedPermissionsItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedPermissionsItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedPermissionsItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedPermissionsItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedPermissionsItem1Status;
  enabled: SharedPermissionsItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedPermissionsItem1ListResponse {
  items: ISharedPermissionsItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedPermissionsItem1Filter {
  query?: string;
  status?: SharedPermissionsItem1Status[];
  type?: SharedPermissionsItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedPermissionsItem1;
  sortOrder?: 'asc' | 'desc';
}

export class SharedPermissionsItem1Model implements ISharedPermissionsItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedPermissionsItem1Status = undefined as any;
  enabled: SharedPermissionsItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedPermissionsItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedPermissionsItem1 {
    return { ...this } as ISharedPermissionsItem1;
  }

  clone(): SharedPermissionsItem1Model {
    return new SharedPermissionsItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}