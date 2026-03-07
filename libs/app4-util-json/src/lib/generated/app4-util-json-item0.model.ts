export enum App4UtilJsonItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UtilJsonItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UtilJsonItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UtilJsonItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UtilJsonItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UtilJsonItem0Status;
  enabled: App4UtilJsonItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp4UtilJsonItem0ListResponse {
  items: IApp4UtilJsonItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UtilJsonItem0Filter {
  query?: string;
  status?: App4UtilJsonItem0Status[];
  type?: App4UtilJsonItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UtilJsonItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App4UtilJsonItem0Model implements IApp4UtilJsonItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UtilJsonItem0Status = undefined as any;
  enabled: App4UtilJsonItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp4UtilJsonItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UtilJsonItem0 {
    return { ...this } as IApp4UtilJsonItem0;
  }

  clone(): App4UtilJsonItem0Model {
    return new App4UtilJsonItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}