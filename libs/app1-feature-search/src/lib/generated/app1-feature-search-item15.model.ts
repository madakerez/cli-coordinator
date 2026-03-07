export enum App1FeatureSearchItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureSearchItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureSearchItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureSearchItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureSearchItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureSearchItem15Status;
  enabled: App1FeatureSearchItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureSearchItem15Status;
}

export interface IApp1FeatureSearchItem15ListResponse {
  items: IApp1FeatureSearchItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureSearchItem15Filter {
  query?: string;
  status?: App1FeatureSearchItem15Status[];
  type?: App1FeatureSearchItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureSearchItem15;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureSearchItem15Model implements IApp1FeatureSearchItem15 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureSearchItem15Status = undefined as any;
  enabled: App1FeatureSearchItem15Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureSearchItem15Status = undefined as any;

  constructor(data?: Partial<IApp1FeatureSearchItem15>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureSearchItem15 {
    return { ...this } as IApp1FeatureSearchItem15;
  }

  clone(): App1FeatureSearchItem15Model {
    return new App1FeatureSearchItem15Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}