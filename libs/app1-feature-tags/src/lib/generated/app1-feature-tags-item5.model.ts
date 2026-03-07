export enum App1FeatureTagsItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureTagsItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureTagsItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureTagsItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureTagsItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureTagsItem5Status;
  enabled: App1FeatureTagsItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureTagsItem5Status;
  category?: App1FeatureTagsItem5Type;
  tags?: string;
}

export interface IApp1FeatureTagsItem5ListResponse {
  items: IApp1FeatureTagsItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureTagsItem5Filter {
  query?: string;
  status?: App1FeatureTagsItem5Status[];
  type?: App1FeatureTagsItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureTagsItem5;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureTagsItem5Model implements IApp1FeatureTagsItem5 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureTagsItem5Status = undefined as any;
  enabled: App1FeatureTagsItem5Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureTagsItem5Status = undefined as any;
  category: App1FeatureTagsItem5Type = undefined as any;
  tags: string = undefined as any;

  constructor(data?: Partial<IApp1FeatureTagsItem5>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureTagsItem5 {
    return { ...this } as IApp1FeatureTagsItem5;
  }

  clone(): App1FeatureTagsItem5Model {
    return new App1FeatureTagsItem5Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}