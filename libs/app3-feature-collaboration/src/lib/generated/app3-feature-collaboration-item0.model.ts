export enum App3FeatureCollaborationItem0Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
  Archived = 'archived',
  Draft = 'draft',
}

export enum App3FeatureCollaborationItem0Type {
  Default = 'default',
  Custom = 'custom',
  System = 'system',
  Template = 'template',
}

export interface App3FeatureCollaborationItem0Config {
  maxRetries: number;
  timeout: number;
  batchSize: number;
  enableCache: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

export interface App3FeatureCollaborationItem0Metadata {
  version: number;
  lastModified: Date;
  author: string;
  checksum: string;
}

export interface IApp3FeatureCollaborationItem0 {
  id: string;
  name: number;
  label: boolean;
  value: Date;
  count: App3FeatureCollaborationItem0Status;
  enabled: App3FeatureCollaborationItem0Type;
  createdAt?: string;
  updatedAt?: number;
}

export interface IApp3FeatureCollaborationItem0ListResponse {
  items: IApp3FeatureCollaborationItem0[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface IApp3FeatureCollaborationItem0Filter {
  query?: string;
  status?: App3FeatureCollaborationItem0Status[];
  type?: App3FeatureCollaborationItem0Type;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: keyof IApp3FeatureCollaborationItem0;
  sortOrder?: 'asc' | 'desc';
}

export class App3FeatureCollaborationItem0Model implements IApp3FeatureCollaborationItem0 {
  id: string = undefined as any;
  name: number = undefined as any;
  label: boolean = undefined as any;
  value: Date = undefined as any;
  count: App3FeatureCollaborationItem0Status = undefined as any;
  enabled: App3FeatureCollaborationItem0Type = undefined as any;
  createdAt: string = undefined as any;
  updatedAt: number = undefined as any;

  constructor(data?: Partial<IApp3FeatureCollaborationItem0>) {
    if (data) Object.assign(this, data);
  }

  toJSON(): IApp3FeatureCollaborationItem0 {
    return { ...this } as IApp3FeatureCollaborationItem0;
  }

  clone(): App3FeatureCollaborationItem0Model {
    return new App3FeatureCollaborationItem0Model(this.toJSON());
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    return errors;
  }
}