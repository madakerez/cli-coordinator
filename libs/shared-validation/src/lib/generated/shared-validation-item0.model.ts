export enum SharedValidationItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedValidationItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedValidationItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedValidationItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedValidationItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedValidationItem0Status;
  enabled: SharedValidationItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedValidationItem0ListResponse {
  items: ISharedValidationItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedValidationItem0Filter {
  query?: string;
  status?: SharedValidationItem0Status[];
  type?: SharedValidationItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedValidationItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedValidationItem0Model implements ISharedValidationItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedValidationItem0Status = undefined as any;
  enabled: SharedValidationItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedValidationItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedValidationItem0 {
    return { ...this } as ISharedValidationItem0;
  }

  clone(): SharedValidationItem0Model {
    return new SharedValidationItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}