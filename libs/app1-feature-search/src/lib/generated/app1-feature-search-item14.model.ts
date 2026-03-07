export enum App1FeatureSearchItem14Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureSearchItem14Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureSearchItem14Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureSearchItem14Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureSearchItem14 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureSearchItem14Status;
  enabled: App1FeatureSearchItem14Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp1FeatureSearchItem14ListResponse {
  items: IApp1FeatureSearchItem14[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureSearchItem14Filter {
  query?: string;
  status?: App1FeatureSearchItem14Status[];
  type?: App1FeatureSearchItem14Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureSearchItem14;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureSearchItem14Model implements IApp1FeatureSearchItem14 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureSearchItem14Status = undefined as any;
  enabled: App1FeatureSearchItem14Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<IApp1FeatureSearchItem14>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureSearchItem14 {
    return { ...this } as IApp1FeatureSearchItem14;
  }

  clone(): App1FeatureSearchItem14Model {
    return new App1FeatureSearchItem14Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}