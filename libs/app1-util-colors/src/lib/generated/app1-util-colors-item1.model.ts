export enum App1UtilColorsItem1Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1UtilColorsItem1Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1UtilColorsItem1Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1UtilColorsItem1Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1UtilColorsItem1 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1UtilColorsItem1Status;
  enabled: App1UtilColorsItem1Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
}

export interface IApp1UtilColorsItem1ListResponse {
  items: IApp1UtilColorsItem1[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1UtilColorsItem1Filter {
  query?: string;
  status?: App1UtilColorsItem1Status[];
  type?: App1UtilColorsItem1Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1UtilColorsItem1;
  sortOrder?: 'asc' | 'desc';
}

export class App1UtilColorsItem1Model implements IApp1UtilColorsItem1 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1UtilColorsItem1Status = undefined as any;
  enabled: App1UtilColorsItem1Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;

  constructor(data?: Partial<IApp1UtilColorsItem1>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1UtilColorsItem1 {
    return { ...this } as IApp1UtilColorsItem1;
  }

  clone(): App1UtilColorsItem1Model {
    return new App1UtilColorsItem1Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}