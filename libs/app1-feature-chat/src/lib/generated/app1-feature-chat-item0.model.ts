export enum App1FeatureChatItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureChatItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureChatItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureChatItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureChatItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureChatItem0Status;
  enabled: App1FeatureChatItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp1FeatureChatItem0ListResponse {
  items: IApp1FeatureChatItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureChatItem0Filter {
  query?: string;
  status?: App1FeatureChatItem0Status[];
  type?: App1FeatureChatItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureChatItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureChatItem0Model implements IApp1FeatureChatItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureChatItem0Status = undefined as any;
  enabled: App1FeatureChatItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp1FeatureChatItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureChatItem0 {
    return { ...this } as IApp1FeatureChatItem0;
  }

  clone(): App1FeatureChatItem0Model {
    return new App1FeatureChatItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}