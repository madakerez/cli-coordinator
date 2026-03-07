export enum App4FeatureTemplatesItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4FeatureTemplatesItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4FeatureTemplatesItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4FeatureTemplatesItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4FeatureTemplatesItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4FeatureTemplatesItem0Status;
  enabled: App4FeatureTemplatesItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4FeatureTemplatesItem0ListResponse {
  items: IApp4FeatureTemplatesItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4FeatureTemplatesItem0Filter {
  query?: string;
  status?: App4FeatureTemplatesItem0Status[];
  type?: App4FeatureTemplatesItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4FeatureTemplatesItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4FeatureTemplatesItem0Model implements IApp4FeatureTemplatesItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4FeatureTemplatesItem0Status = undefined as any;
  enabled: App4FeatureTemplatesItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4FeatureTemplatesItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4FeatureTemplatesItem0 {
    return { ...this } as IApp4FeatureTemplatesItem0;
  }

  clone(): App4FeatureTemplatesItem0Model {
    return new App4FeatureTemplatesItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}