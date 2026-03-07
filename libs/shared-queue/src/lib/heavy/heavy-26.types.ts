// Complex type computations for SharedQueueHeavy26
export type DeepReadonlySharedQueueHeavy26<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedQueueHeavy26<U>>
      : DeepReadonlySharedQueueHeavy26<T[P]>
    : T[P];
};

export type DeepPartialSharedQueueHeavy26<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedQueueHeavy26<U>>
      : DeepPartialSharedQueueHeavy26<T[P]>
    : T[P];
};

export type SharedQueueHeavy26Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>>>>>;

export type SharedQueueHeavy26Union =
  | { kind: 'SharedQueueHeavy26_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_22'; data_22: string; nested_22: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_23'; data_23: string; nested_23: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_24'; data_24: string; nested_24: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_25'; data_25: string; nested_25: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_26'; data_26: string; nested_26: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_27'; data_27: string; nested_27: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_28'; data_28: string; nested_28: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_29'; data_29: string; nested_29: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_30'; data_30: string; nested_30: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_31'; data_31: string; nested_31: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_32'; data_32: string; nested_32: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_33'; data_33: string; nested_33: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_34'; data_34: string; nested_34: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_35'; data_35: string; nested_35: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_36'; data_36: string; nested_36: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_37'; data_37: string; nested_37: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_38'; data_38: string; nested_38: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_39'; data_39: string; nested_39: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_40'; data_40: string; nested_40: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_41'; data_41: string; nested_41: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_42'; data_42: string; nested_42: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_43'; data_43: string; nested_43: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_44'; data_44: string; nested_44: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedQueueHeavy26_variant_45'; data_45: string; nested_45: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedQueueHeavy26Kind<T extends SharedQueueHeavy26Union> = T['kind'];

export type SharedQueueHeavy26ByKind<K extends SharedQueueHeavy26Union['kind']> = Extract<SharedQueueHeavy26Union, { kind: K }>;

export type SharedQueueHeavy26MappedResult<T> = {
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
    field18: string;
    field19: string;
    field20: string;
};

export type SharedQueueHeavy26Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedQueueHeavy26Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedQueueHeavy26RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedQueueHeavy26RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedQueueHeavy26EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedQueueHeavy26Entity0 extends SharedQueueHeavy26EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedQueueHeavy26Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedQueueHeavy26Entity0[]>;
}

export interface SharedQueueHeavy26Entity1 extends SharedQueueHeavy26EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedQueueHeavy26Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedQueueHeavy26Entity1[]>;
}

export interface SharedQueueHeavy26Entity2 extends SharedQueueHeavy26EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedQueueHeavy26Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedQueueHeavy26Entity2[]>;
}

export interface SharedQueueHeavy26Entity3 extends SharedQueueHeavy26EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedQueueHeavy26Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedQueueHeavy26Entity3[]>;
}

export interface SharedQueueHeavy26Entity4 extends SharedQueueHeavy26EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedQueueHeavy26Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedQueueHeavy26Entity4[]>;
}

export interface SharedQueueHeavy26Entity5 extends SharedQueueHeavy26EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedQueueHeavy26Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedQueueHeavy26Entity5[]>;
}

export interface SharedQueueHeavy26Entity6 extends SharedQueueHeavy26EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedQueueHeavy26Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedQueueHeavy26Entity6[]>;
}

export interface SharedQueueHeavy26Entity7 extends SharedQueueHeavy26EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedQueueHeavy26Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedQueueHeavy26Entity7[]>;
}

export interface SharedQueueHeavy26Entity8 extends SharedQueueHeavy26EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedQueueHeavy26Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, SharedQueueHeavy26Entity8[]>;
}


export class SharedQueueHeavy26Registry {
  private entities = new Map<string, SharedQueueHeavy26EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedQueueHeavy26EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedQueueHeavy26EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedQueueHeavy26EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedQueueHeavy26EntityBase>(predicate: (entity: SharedQueueHeavy26EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): SharedQueueHeavy26EntityBase[] {
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

  toJSON(): Record<string, SharedQueueHeavy26EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedQueueHeavy26_CONSTANTS = {
  MAX_DEPTH: 6,
  UNION_SIZE: 46,
  VERSION: '26.6.26',
} as const;