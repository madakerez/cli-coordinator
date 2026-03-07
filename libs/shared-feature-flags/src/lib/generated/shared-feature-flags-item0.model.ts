export enum SharedFeatureFlagsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedFeatureFlagsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedFeatureFlagsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedFeatureFlagsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedFeatureFlagsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedFeatureFlagsItem0Status;
  enabled: SharedFeatureFlagsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface ISharedFeatureFlagsItem0ListResponse {
  items: ISharedFeatureFlagsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedFeatureFlagsItem0Filter {
  query?: string;
  status?: SharedFeatureFlagsItem0Status[];
  type?: SharedFeatureFlagsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedFeatureFlagsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class SharedFeatureFlagsItem0Model implements ISharedFeatureFlagsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedFeatureFlagsItem0Status = undefined as any;
  enabled: SharedFeatureFlagsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<ISharedFeatureFlagsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedFeatureFlagsItem0 {
    return { ...this } as ISharedFeatureFlagsItem0;
  }

  clone(): SharedFeatureFlagsItem0Model {
    return new SharedFeatureFlagsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}