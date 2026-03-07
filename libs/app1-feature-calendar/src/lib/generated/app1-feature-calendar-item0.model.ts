export enum App1FeatureCalendarItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureCalendarItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureCalendarItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureCalendarItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureCalendarItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureCalendarItem0Status;
  enabled: App1FeatureCalendarItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp1FeatureCalendarItem0ListResponse {
  items: IApp1FeatureCalendarItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureCalendarItem0Filter {
  query?: string;
  status?: App1FeatureCalendarItem0Status[];
  type?: App1FeatureCalendarItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureCalendarItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureCalendarItem0Model implements IApp1FeatureCalendarItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureCalendarItem0Status = undefined as any;
  enabled: App1FeatureCalendarItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp1FeatureCalendarItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureCalendarItem0 {
    return { ...this } as IApp1FeatureCalendarItem0;
  }

  clone(): App1FeatureCalendarItem0Model {
    return new App1FeatureCalendarItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}