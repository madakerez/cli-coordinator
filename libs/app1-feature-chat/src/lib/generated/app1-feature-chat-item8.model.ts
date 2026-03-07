export enum App1FeatureChatItem8Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureChatItem8Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureChatItem8Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureChatItem8Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureChatItem8 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureChatItem8Status;
  enabled: App1FeatureChatItem8Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1FeatureChatItem8Status;
  category?: App1FeatureChatItem8Type;
  tags?: string;
  config?: number;
  options?: boolean;
  parentId?: Date;
}

export interface IApp1FeatureChatItem8ListResponse {
  items: IApp1FeatureChatItem8[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureChatItem8Filter {
  query?: string;
  status?: App1FeatureChatItem8Status[];
  type?: App1FeatureChatItem8Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureChatItem8;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureChatItem8Model implements IApp1FeatureChatItem8 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureChatItem8Status = undefined as any;
  enabled: App1FeatureChatItem8Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1FeatureChatItem8Status = undefined as any;
  category: App1FeatureChatItem8Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;
  parentId: Date = undefined as any;

  constructor(data?: Partial<IApp1FeatureChatItem8>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureChatItem8 {
    return { ...this } as IApp1FeatureChatItem8;
  }

  clone(): App1FeatureChatItem8Model {
    return new App1FeatureChatItem8Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}