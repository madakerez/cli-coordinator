export enum App1FeatureChatItem5Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureChatItem5Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureChatItem5Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureChatItem5Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureChatItem5 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureChatItem5Status;
  enabled: App1FeatureChatItem5Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureChatItem5Status;
  category?: App1FeatureChatItem5Type;
  tags?: string;
}

export interface IApp1FeatureChatItem5ListResponse {
  items: IApp1FeatureChatItem5[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureChatItem5Filter {
  query?: string;
  status?: App1FeatureChatItem5Status[];
  type?: App1FeatureChatItem5Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureChatItem5;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureChatItem5Model implements IApp1FeatureChatItem5 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureChatItem5Status = undefined as any;
  enabled: App1FeatureChatItem5Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureChatItem5Status = undefined as any;
  category: App1FeatureChatItem5Type = undefined as any;
  tags: string = undefined as any;

  constructor(data?: Partial<IApp1FeatureChatItem5>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureChatItem5 {
    return { ...this } as IApp1FeatureChatItem5;
  }

  clone(): App1FeatureChatItem5Model {
    return new App1FeatureChatItem5Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}