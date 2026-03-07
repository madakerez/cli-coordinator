export enum App1UtilColorsItem3Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1UtilColorsItem3Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1UtilColorsItem3Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1UtilColorsItem3Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1UtilColorsItem3 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1UtilColorsItem3Status;
  enabled: App1UtilColorsItem3Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: App1UtilColorsItem3Status;
}

export interface IApp1UtilColorsItem3ListResponse {
  items: IApp1UtilColorsItem3[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1UtilColorsItem3Filter {
  query?: string;
  status?: App1UtilColorsItem3Status[];
  type?: App1UtilColorsItem3Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1UtilColorsItem3;
  sortOrder?: 'asc' | 'desc';
}

export class App1UtilColorsItem3Model implements IApp1UtilColorsItem3 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1UtilColorsItem3Status = undefined as any;
  enabled: App1UtilColorsItem3Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: App1UtilColorsItem3Status = undefined as any;

  constructor(data?: Partial<IApp1UtilColorsItem3>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1UtilColorsItem3 {
    return { ...this } as IApp1UtilColorsItem3;
  }

  clone(): App1UtilColorsItem3Model {
    return new App1UtilColorsItem3Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}