export enum SharedHttpItem15Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem15Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem15Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem15Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem15 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem15Status;
  enabled: SharedHttpItem15Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem15Status;
}

export interface ISharedHttpItem15ListResponse {
  items: ISharedHttpItem15[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem15Filter {
  query?: string;
  status?: SharedHttpItem15Status[];
  type?: SharedHttpItem15Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem15;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem15Model implements ISharedHttpItem15 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem15Status = undefined as any;
  enabled: SharedHttpItem15Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedHttpItem15Status = undefined as any;

  constructor(data?: Partial<ISharedHttpItem15>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem15 {
    return { ...this } as ISharedHttpItem15;
  }

  clone(): SharedHttpItem15Model {
    return new SharedHttpItem15Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}