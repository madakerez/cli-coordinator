export enum App4UiNavigationItem2Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiNavigationItem2Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiNavigationItem2Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiNavigationItem2Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiNavigationItem2 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiNavigationItem2Status;
  enabled: App4UiNavigationItem2Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
}

export interface IApp4UiNavigationItem2ListResponse {
  items: IApp4UiNavigationItem2[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiNavigationItem2Filter {
  query?: string;
  status?: App4UiNavigationItem2Status[];
  type?: App4UiNavigationItem2Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiNavigationItem2;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiNavigationItem2Model implements IApp4UiNavigationItem2 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiNavigationItem2Status = undefined as any;
  enabled: App4UiNavigationItem2Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;

  constructor(data?: Partial<IApp4UiNavigationItem2>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiNavigationItem2 {
    return { ...this } as IApp4UiNavigationItem2;
  }

  clone(): App4UiNavigationItem2Model {
    return new App4UiNavigationItem2Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}