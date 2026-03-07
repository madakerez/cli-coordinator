export enum SharedModelsItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedModelsItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedModelsItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedModelsItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedModelsItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedModelsItem1Status;
  enabled: SharedModelsItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface ISharedModelsItem1ListResponse {
  items: ISharedModelsItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedModelsItem1Filter {
  query?: string;
  status?: SharedModelsItem1Status[];
  type?: SharedModelsItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedModelsItem1;
  sortOrder?: 'asc' | 'desc';
}

export class SharedModelsItem1Model implements ISharedModelsItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedModelsItem1Status = undefined as any;
  enabled: SharedModelsItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<ISharedModelsItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedModelsItem1 {
    return { ...this } as ISharedModelsItem1;
  }

  clone(): SharedModelsItem1Model {
    return new SharedModelsItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}