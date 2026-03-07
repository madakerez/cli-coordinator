export enum SharedValidationItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedValidationItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedValidationItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedValidationItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedValidationItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedValidationItem13Status;
  enabled: SharedValidationItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedValidationItem13ListResponse {
  items: ISharedValidationItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedValidationItem13Filter {
  query?: string;
  status?: SharedValidationItem13Status[];
  type?: SharedValidationItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedValidationItem13;
  sortOrder?: 'asc' | 'desc';
}

export class SharedValidationItem13Model implements ISharedValidationItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedValidationItem13Status = undefined as any;
  enabled: SharedValidationItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedValidationItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedValidationItem13 {
    return { ...this } as ISharedValidationItem13;
  }

  clone(): SharedValidationItem13Model {
    return new SharedValidationItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}