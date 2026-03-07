export enum SharedModelsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedModelsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedModelsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedModelsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedModelsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedModelsItem0Status;
  enabled: SharedModelsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedModelsItem0ListResponse {
  items: ISharedModelsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedModelsItem0Filter {
  query?: string;
  status?: SharedModelsItem0Status[];
  type?: SharedModelsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedModelsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedModelsItem0Model implements ISharedModelsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedModelsItem0Status = undefined as any;
  enabled: SharedModelsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedModelsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedModelsItem0 {
    return { ...this } as ISharedModelsItem0;
  }

  clone(): SharedModelsItem0Model {
    return new SharedModelsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}