export enum SharedHttpItem7Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum SharedHttpItem7Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface SharedHttpItem7Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface SharedHttpItem7Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface ISharedHttpItem7 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: SharedHttpItem7Status;
  enabled: SharedHttpItem7Type;
  createdAt?: string;
  updatedAt?: number;
  description?: boolean;
  metadata?: Date;
  priority?: SharedHttpItem7Status;
  category?: SharedHttpItem7Type;
  tags?: string;
  config?: number;
  options?: boolean;
}

export interface ISharedHttpItem7ListResponse {
  items: ISharedHttpItem7[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ISharedHttpItem7Filter {
  query?: string;
  status?: SharedHttpItem7Status[];
  type?: SharedHttpItem7Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof ISharedHttpItem7;
  sortOrder?: 'asc' | 'desc';
}

export class SharedHttpItem7Model implements ISharedHttpItem7 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: SharedHttpItem7Status = undefined as any;
  enabled: SharedHttpItem7Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;
  description: boolean = undefined as any;
  metadata: Date = undefined as any;
  priority: SharedHttpItem7Status = undefined as any;
  category: SharedHttpItem7Type = undefined as any;
  tags: string = undefined as any;
  config: number = undefined as any;
  options: boolean = undefined as any;

  constructor(data?: Partial<ISharedHttpItem7>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): ISharedHttpItem7 {
    return { ...this } as ISharedHttpItem7;
  }

  clone(): SharedHttpItem7Model {
    return new SharedHttpItem7Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}