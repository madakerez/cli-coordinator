export enum App2FeatureSharingItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App2FeatureSharingItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App2FeatureSharingItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App2FeatureSharingItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp2FeatureSharingItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App2FeatureSharingItem0Status;
  enabled: App2FeatureSharingItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp2FeatureSharingItem0ListResponse {
  items: IApp2FeatureSharingItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp2FeatureSharingItem0Filter {
  query?: string;
  status?: App2FeatureSharingItem0Status[];
  type?: App2FeatureSharingItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp2FeatureSharingItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App2FeatureSharingItem0Model implements IApp2FeatureSharingItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App2FeatureSharingItem0Status = undefined as any;
  enabled: App2FeatureSharingItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp2FeatureSharingItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp2FeatureSharingItem0 {
    return { ...this } as IApp2FeatureSharingItem0;
  }

  clone(): App2FeatureSharingItem0Model {
    return new App2FeatureSharingItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}