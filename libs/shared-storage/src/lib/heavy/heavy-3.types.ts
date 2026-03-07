// Complex type computations for SharedStorageHeavy3
export type DeepReadonlySharedStorageHeavy3<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedStorageHeavy3<U>>
      : DeepReadonlySharedStorageHeavy3<T[P]>
    : T[P];
};

export type DeepPartialSharedStorageHeavy3<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedStorageHeavy3<U>>
      : DeepPartialSharedStorageHeavy3<T[P]>
    : T[P];
};

export type SharedStorageHeavy3Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>;

export type SharedStorageHeavy3Union =
  | { kind: 'SharedStorageHeavy3_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedStorageHeavy3_variant_22'; data_22: string; nested_22: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedStorageHeavy3Kind<T extends SharedStorageHeavy3Union> = T['kind'];

export type SharedStorageHeavy3ByKind<K extends SharedStorageHeavy3Union['kind']> = Extract<SharedStorageHeavy3Union, { kind: K }>;

export type SharedStorageHeavy3MappedResult<T> = {
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
    field16: string;
    field17: string;
};

export type SharedStorageHeavy3Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedStorageHeavy3Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedStorageHeavy3RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedStorageHeavy3RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedStorageHeavy3EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedStorageHeavy3Entity0 extends SharedStorageHeavy3EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity0[]>;
}

export interface SharedStorageHeavy3Entity1 extends SharedStorageHeavy3EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity1[]>;
}

export interface SharedStorageHeavy3Entity2 extends SharedStorageHeavy3EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity2[]>;
}

export interface SharedStorageHeavy3Entity3 extends SharedStorageHeavy3EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity3[]>;
}

export interface SharedStorageHeavy3Entity4 extends SharedStorageHeavy3EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity4[]>;
}

export interface SharedStorageHeavy3Entity5 extends SharedStorageHeavy3EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity5[]>;
}

export interface SharedStorageHeavy3Entity6 extends SharedStorageHeavy3EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity6[]>;
}

export interface SharedStorageHeavy3Entity7 extends SharedStorageHeavy3EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity7[]>;
}

export interface SharedStorageHeavy3Entity8 extends SharedStorageHeavy3EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity8[]>;
}

export interface SharedStorageHeavy3Entity9 extends SharedStorageHeavy3EntityBase {
  name9: string;
  value9: number;
  config9: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity8 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity9[]>;
}

export interface SharedStorageHeavy3Entity10 extends SharedStorageHeavy3EntityBase {
  name10: string;
  value10: number;
  config10: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedStorageHeavy3Entity9 | null> };
      };
    }>;
  };
  relations: Map<string, SharedStorageHeavy3Entity10[]>;
}


export class SharedStorageHeavy3Registry {
  private entities = new Map<string, SharedStorageHeavy3EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedStorageHeavy3EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedStorageHeavy3EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedStorageHeavy3EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedStorageHeavy3EntityBase>(predicate: (entity: SharedStorageHeavy3EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): SharedStorageHeavy3EntityBase[] {
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

  toJSON(): Record<string, SharedStorageHeavy3EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedStorageHeavy3_CONSTANTS = {
  MAX_DEPTH: 8,
  UNION_SIZE: 23,
  VERSION: '3.3.3',
} as const;