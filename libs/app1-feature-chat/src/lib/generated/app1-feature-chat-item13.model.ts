export enum App1FeatureChatItem13Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1FeatureChatItem13Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1FeatureChatItem13Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1FeatureChatItem13Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1FeatureChatItem13 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1FeatureChatItem13Status;
  enabled: App1FeatureChatItem13Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp1FeatureChatItem13ListResponse {
  items: IApp1FeatureChatItem13[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1FeatureChatItem13Filter {
  query?: string;
  status?: App1FeatureChatItem13Status[];
  type?: App1FeatureChatItem13Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1FeatureChatItem13;
  sortOrder?: 'asc' | 'desc';
}

export class App1FeatureChatItem13Model implements IApp1FeatureChatItem13 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1FeatureChatItem13Status = undefined as any;
  enabled: App1FeatureChatItem13Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp1FeatureChatItem13>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1FeatureChatItem13 {
    return { ...this } as IApp1FeatureChatItem13;
  }

  clone(): App1FeatureChatItem13Model {
    return new App1FeatureChatItem13Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}