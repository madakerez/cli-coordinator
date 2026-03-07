export enum App4UtilJsonItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UtilJsonItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UtilJsonItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UtilJsonItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UtilJsonItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UtilJsonItem1Status;
  enabled: App4UtilJsonItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp4UtilJsonItem1ListResponse {
  items: IApp4UtilJsonItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UtilJsonItem1Filter {
  query?: string;
  status?: App4UtilJsonItem1Status[];
  type?: App4UtilJsonItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UtilJsonItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App4UtilJsonItem1Model implements IApp4UtilJsonItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UtilJsonItem1Status = undefined as any;
  enabled: App4UtilJsonItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp4UtilJsonItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UtilJsonItem1 {
    return { ...this } as IApp4UtilJsonItem1;
  }

  clone(): App4UtilJsonItem1Model {
    return new App4UtilJsonItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}