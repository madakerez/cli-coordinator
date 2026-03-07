export enum App4UiModalsItem16Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App4UiModalsItem16Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App4UiModalsItem16Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App4UiModalsItem16Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp4UiModalsItem16 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App4UiModalsItem16Status;
  enabled: App4UiModalsItem16Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App4UiModalsItem16Status;
  category?: App4UiModalsItem16Type;
}

export interface IApp4UiModalsItem16ListResponse {
  items: IApp4UiModalsItem16[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp4UiModalsItem16Filter {
  query?: string;
  status?: App4UiModalsItem16Status[];
  type?: App4UiModalsItem16Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp4UiModalsItem16;
  sortOrder?: 'asc' | 'desc';
}

export class App4UiModalsItem16Model implements IApp4UiModalsItem16 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App4UiModalsItem16Status = undefined as any;
  enabled: App4UiModalsItem16Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App4UiModalsItem16Status = undefined as any;
  category: App4UiModalsItem16Type = undefined as any;

  constructor(data?: Partial<IApp4UiModalsItem16>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp4UiModalsItem16 {
    return { ...this } as IApp4UiModalsItem16;
  }

  clone(): App4UiModalsItem16Model {
    return new App4UiModalsItem16Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}