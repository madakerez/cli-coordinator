export enum App1UtilColorsItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App1UtilColorsItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App1UtilColorsItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App1UtilColorsItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp1UtilColorsItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App1UtilColorsItem0Status;
  enabled: App1UtilColorsItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp1UtilColorsItem0ListResponse {
  items: IApp1UtilColorsItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp1UtilColorsItem0Filter {
  query?: string;
  status?: App1UtilColorsItem0Status[];
  type?: App1UtilColorsItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp1UtilColorsItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App1UtilColorsItem0Model implements IApp1UtilColorsItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App1UtilColorsItem0Status = undefined as any;
  enabled: App1UtilColorsItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp1UtilColorsItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp1UtilColorsItem0 {
    return { ...this } as IApp1UtilColorsItem0;
  }

  clone(): App1UtilColorsItem0Model {
    return new App1UtilColorsItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}