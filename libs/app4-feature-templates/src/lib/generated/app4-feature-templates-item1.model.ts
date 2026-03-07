export enum App4FeatureTemplatesItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureTemplatesItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureTemplatesItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureTemplatesItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureTemplatesItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureTemplatesItem1Status;
  enabled: App4FeatureTemplatesItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4FeatureTemplatesItem1ListResponse {
  items: IApp4FeatureTemplatesItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureTemplatesItem1Filter {
  query?: string;
  status?: App4FeatureTemplatesItem1Status[];
  type?: App4FeatureTemplatesItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureTemplatesItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureTemplatesItem1Model implements IApp4FeatureTemplatesItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureTemplatesItem1Status = undefined as any;
  enabled: App4FeatureTemplatesItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp4FeatureTemplatesItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureTemplatesItem1 {
    return { ...this } as IApp4FeatureTemplatesItem1;
  }

  clone(): App4FeatureTemplatesItem1Model {
    return new App4FeatureTemplatesItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}