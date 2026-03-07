export enum SharedValidationItem6Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedValidationItem6Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedValidationItem6Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedValidationItem6Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedValidationItem6 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedValidationItem6Status;
  enabled: SharedValidationItem6Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedValidationItem6Status;
  category?: SharedValidationItem6Type;
  tags?: string;
  config?: number;
}

export interface ISharedValidationItem6ListResponse {
  items: ISharedValidationItem6[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedValidationItem6Filter {
  query?: string;
  status?: SharedValidationItem6Status[];
  type?: SharedValidationItem6Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedValidationItem6;
  sortOrder?: 'asc' | 'desc';
}

export class SharedValidationItem6Model implements ISharedValidationItem6 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedValidationItem6Status = undefined as any;
  enabled: SharedValidationItem6Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedValidationItem6Status = undefined as any;
  category: SharedValidationItem6Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;

  constructor(data?: Partial<ISharedValidationItem6>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedValidationItem6 {
    return { ...this } as ISharedValidationItem6;
  }

  clone(): SharedValidationItem6Model {
    return new SharedValidationItem6Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}