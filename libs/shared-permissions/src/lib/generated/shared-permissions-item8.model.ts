export enum SharedPermissionsItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedPermissionsItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedPermissionsItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedPermissionsItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedPermissionsItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedPermissionsItem8Status;
  enabled: SharedPermissionsItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedPermissionsItem8Status;
  category?: SharedPermissionsItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface ISharedPermissionsItem8ListResponse {
  items: ISharedPermissionsItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedPermissionsItem8Filter {
  query?: string;
  status?: SharedPermissionsItem8Status[];
  type?: SharedPermissionsItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedPermissionsItem8;
  sortOrder?: 'asc' | 'desc';
}

export class SharedPermissionsItem8Model implements ISharedPermissionsItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedPermissionsItem8Status = undefined as any;
  enabled: SharedPermissionsItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedPermissionsItem8Status = undefined as any;
  category: SharedPermissionsItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<ISharedPermissionsItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedPermissionsItem8 {
    return { ...this } as ISharedPermissionsItem8;
  }

  clone(): SharedPermissionsItem8Model {
    return new SharedPermissionsItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}