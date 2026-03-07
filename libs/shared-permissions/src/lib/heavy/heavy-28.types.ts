// Complex type computations for SharedPermissionsHeavy28
export type DeepReadonlySharedPermissionsHeavy28<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedPermissionsHeavy28<U>>
      : DeepReadonlySharedPermissionsHeavy28<T[P]>
    : T[P];
};

export type DeepPartialSharedPermissionsHeavy28<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedPermissionsHeavy28<U>>
      : DeepPartialSharedPermissionsHeavy28<T[P]>
    : T[P];
};

export type SharedPermissionsHeavy28Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>;

export type SharedPermissionsHeavy28Union =
  | { kind: 'SharedPermissionsHeavy28_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_22'; data_22: string; nested_22: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_23'; data_23: string; nested_23: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_24'; data_24: string; nested_24: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_25'; data_25: string; nested_25: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_26'; data_26: string; nested_26: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_27'; data_27: string; nested_27: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_28'; data_28: string; nested_28: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_29'; data_29: string; nested_29: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_30'; data_30: string; nested_30: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_31'; data_31: string; nested_31: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_32'; data_32: string; nested_32: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_33'; data_33: string; nested_33: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_34'; data_34: string; nested_34: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_35'; data_35: string; nested_35: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_36'; data_36: string; nested_36: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_37'; data_37: string; nested_37: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_38'; data_38: string; nested_38: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_39'; data_39: string; nested_39: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_40'; data_40: string; nested_40: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_41'; data_41: string; nested_41: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_42'; data_42: string; nested_42: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_43'; data_43: string; nested_43: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_44'; data_44: string; nested_44: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_45'; data_45: string; nested_45: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_46'; data_46: string; nested_46: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy28_variant_47'; data_47: string; nested_47: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedPermissionsHeavy28Kind<T extends SharedPermissionsHeavy28Union> = T['kind'];

export type SharedPermissionsHeavy28ByKind<K extends SharedPermissionsHeavy28Union['kind']> = Extract<SharedPermissionsHeavy28Union, { kind: K }>;

export type SharedPermissionsHeavy28MappedResult<T> = {
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
    field21: string;
    field22: string;
};

export type SharedPermissionsHeavy28Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedPermissionsHeavy28Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedPermissionsHeavy28RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedPermissionsHeavy28RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedPermissionsHeavy28EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedPermissionsHeavy28Entity0 extends SharedPermissionsHeavy28EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity0[]>;
}

export interface SharedPermissionsHeavy28Entity1 extends SharedPermissionsHeavy28EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity1[]>;
}

export interface SharedPermissionsHeavy28Entity2 extends SharedPermissionsHeavy28EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity2[]>;
}

export interface SharedPermissionsHeavy28Entity3 extends SharedPermissionsHeavy28EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity3[]>;
}

export interface SharedPermissionsHeavy28Entity4 extends SharedPermissionsHeavy28EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity4[]>;
}

export interface SharedPermissionsHeavy28Entity5 extends SharedPermissionsHeavy28EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity5[]>;
}

export interface SharedPermissionsHeavy28Entity6 extends SharedPermissionsHeavy28EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity6[]>;
}

export interface SharedPermissionsHeavy28Entity7 extends SharedPermissionsHeavy28EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity7[]>;
}

export interface SharedPermissionsHeavy28Entity8 extends SharedPermissionsHeavy28EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity8[]>;
}

export interface SharedPermissionsHeavy28Entity9 extends SharedPermissionsHeavy28EntityBase {
  name9: string;
  value9: number;
  config9: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity8 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity9[]>;
}

export interface SharedPermissionsHeavy28Entity10 extends SharedPermissionsHeavy28EntityBase {
  name10: string;
  value10: number;
  config10: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy28Entity9 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy28Entity10[]>;
}


export class SharedPermissionsHeavy28Registry {
  private entities = new Map<string, SharedPermissionsHeavy28EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedPermissionsHeavy28EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedPermissionsHeavy28EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedPermissionsHeavy28EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedPermissionsHeavy28EntityBase>(predicate: (entity: SharedPermissionsHeavy28EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): SharedPermissionsHeavy28EntityBase[] {
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

  toJSON(): Record<string, SharedPermissionsHeavy28EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedPermissionsHeavy28_CONSTANTS = {
  MAX_DEPTH: 8,
  UNION_SIZE: 48,
  VERSION: '28.8.28',
} as const;