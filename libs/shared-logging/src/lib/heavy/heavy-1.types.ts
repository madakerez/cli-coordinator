// Complex type computations for SharedLoggingHeavy1
export type DeepReadonlySharedLoggingHeavy1<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedLoggingHeavy1<U>>
      : DeepReadonlySharedLoggingHeavy1<T[P]>
    : T[P];
};

export type DeepPartialSharedLoggingHeavy1<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedLoggingHeavy1<U>>
      : DeepPartialSharedLoggingHeavy1<T[P]>
    : T[P];
};

export type SharedLoggingHeavy1Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>>>>>;

export type SharedLoggingHeavy1Union =
  | { kind: 'SharedLoggingHeavy1_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedLoggingHeavy1_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedLoggingHeavy1Kind<T extends SharedLoggingHeavy1Union> = T['kind'];

export type SharedLoggingHeavy1ByKind<K extends SharedLoggingHeavy1Union['kind']> = Extract<SharedLoggingHeavy1Union, { kind: K }>;

export type SharedLoggingHeavy1MappedResult<T> = {
    field0: string;
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string;
    field6: string;
    field7: string;
    field8: string;
    field9: string;
    field10: string;
    field11: string;
    field12: string;
    field13: string;
    field14: string;
    field15: string;
};

export type SharedLoggingHeavy1Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedLoggingHeavy1Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedLoggingHeavy1RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedLoggingHeavy1RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedLoggingHeavy1EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedLoggingHeavy1Entity0 extends SharedLoggingHeavy1EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedLoggingHeavy1Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedLoggingHeavy1Entity0[]>;
}

export interface SharedLoggingHeavy1Entity1 extends SharedLoggingHeavy1EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedLoggingHeavy1Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedLoggingHeavy1Entity1[]>;
}

export interface SharedLoggingHeavy1Entity2 extends SharedLoggingHeavy1EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedLoggingHeavy1Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedLoggingHeavy1Entity2[]>;
}

export interface SharedLoggingHeavy1Entity3 extends SharedLoggingHeavy1EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedLoggingHeavy1Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedLoggingHeavy1Entity3[]>;
}

export interface SharedLoggingHeavy1Entity4 extends SharedLoggingHeavy1EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedLoggingHeavy1Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedLoggingHeavy1Entity4[]>;
}

export interface SharedLoggingHeavy1Entity5 extends SharedLoggingHeavy1EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedLoggingHeavy1Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedLoggingHeavy1Entity5[]>;
}

export interface SharedLoggingHeavy1Entity6 extends SharedLoggingHeavy1EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedLoggingHeavy1Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedLoggingHeavy1Entity6[]>;
}

export interface SharedLoggingHeavy1Entity7 extends SharedLoggingHeavy1EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedLoggingHeavy1Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedLoggingHeavy1Entity7[]>;
}

export interface SharedLoggingHeavy1Entity8 extends SharedLoggingHeavy1EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedLoggingHeavy1Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, SharedLoggingHeavy1Entity8[]>;
}


export class SharedLoggingHeavy1Registry {
  private entities = new Map<string, SharedLoggingHeavy1EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedLoggingHeavy1EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedLoggingHeavy1EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedLoggingHeavy1EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedLoggingHeavy1EntityBase>(predicate: (entity: SharedLoggingHeavy1EntityBase) => entity is T): T[] {
    return this.findAll().filter(predicate);
  }

  buildIndex(field: string): void {
    const index = new Map<string, Set<string>>();
    for (const [id, entity] of this.entities) {
      const value = String((entity as any)[field] ?? '');
      if (!index.has(value)) index.set(value, new Set());
      index.get(value)!.add(id);
    }
    this.indexes.set(field, index);
  }

  lookupByIndex(field: string, value: string): SharedLoggingHeavy1EntityBase[] {
    const index = this.indexes.get(field);
    if (!index) return [];
    const ids = index.get(value);
    if (!ids) return [];
    return [...ids].map(id => this.entities.get(id)!).filter(Boolean);
  }

  clear(): void {
    this.entities.clear();
    this.indexes.clear();
  }

  get size(): number {
    return this.entities.size;
  }

  toJSON(): Record<string, SharedLoggingHeavy1EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedLoggingHeavy1_CONSTANTS = {
  MAX_DEPTH: 6,
  UNION_SIZE: 21,
  VERSION: '1.1.1',
} as const;