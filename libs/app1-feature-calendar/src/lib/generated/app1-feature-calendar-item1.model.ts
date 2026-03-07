export enum App1FeatureCalendarItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureCalendarItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureCalendarItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureCalendarItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureCalendarItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureCalendarItem1Status;
  enabled: App1FeatureCalendarItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp1FeatureCalendarItem1ListResponse {
  items: IApp1FeatureCalendarItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureCalendarItem1Filter {
  query?: string;
  status?: App1FeatureCalendarItem1Status[];
  type?: App1FeatureCalendarItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureCalendarItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureCalendarItem1Model implements IApp1FeatureCalendarItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureCalendarItem1Status = undefined as any;
  enabled: App1FeatureCalendarItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp1FeatureCalendarItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureCalendarItem1 {
    return { ...this } as IApp1FeatureCalendarItem1;
  }

  clone(): App1FeatureCalendarItem1Model {
    return new App1FeatureCalendarItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}