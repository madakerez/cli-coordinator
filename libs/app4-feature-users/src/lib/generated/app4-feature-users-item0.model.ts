export enum App4FeatureUsersItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureUsersItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureUsersItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureUsersItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureUsersItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureUsersItem0Status;
  enabled: App4FeatureUsersItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureUsersItem0ListResponse {
  items: IApp4FeatureUsersItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureUsersItem0Filter {
  query?: string;
  status?: App4FeatureUsersItem0Status[];
  type?: App4FeatureUsersItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureUsersItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureUsersItem0Model implements IApp4FeatureUsersItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureUsersItem0Status = undefined as any;
  enabled: App4FeatureUsersItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureUsersItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureUsersItem0 {
    return { ...this } as IApp4FeatureUsersItem0;
  }

  clone(): App4FeatureUsersItem0Model {
    return new App4FeatureUsersItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}