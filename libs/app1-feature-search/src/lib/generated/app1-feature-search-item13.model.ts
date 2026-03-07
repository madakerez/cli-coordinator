export enum App1FeatureSearchItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureSearchItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureSearchItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureSearchItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureSearchItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureSearchItem13Status;
  enabled: App1FeatureSearchItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp1FeatureSearchItem13ListResponse {
  items: IApp1FeatureSearchItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureSearchItem13Filter {
  query?: string;
  status?: App1FeatureSearchItem13Status[];
  type?: App1FeatureSearchItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureSearchItem13;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureSearchItem13Model implements IApp1FeatureSearchItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureSearchItem13Status = undefined as any;
  enabled: App1FeatureSearchItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp1FeatureSearchItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureSearchItem13 {
    return { ...this } as IApp1FeatureSearchItem13;
  }

  clone(): App1FeatureSearchItem13Model {
    return new App1FeatureSearchItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}