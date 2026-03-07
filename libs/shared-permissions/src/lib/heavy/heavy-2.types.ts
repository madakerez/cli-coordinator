// Complex type computations for SharedPermissionsHeavy2
export type DeepReadonlySharedPermissionsHeavy2<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedPermissionsHeavy2<U>>
      : DeepReadonlySharedPermissionsHeavy2<T[P]>
    : T[P];
};

export type DeepPartialSharedPermissionsHeavy2<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedPermissionsHeavy2<U>>
      : DeepPartialSharedPermissionsHeavy2<T[P]>
    : T[P];
};

export type SharedPermissionsHeavy2Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, T>>>>>>>>>>>>>>>>>>>>>>>>>>>>;

export type SharedPermissionsHeavy2Union =
  | { kind: 'SharedPermissionsHeavy2_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedPermissionsHeavy2_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedPermissionsHeavy2Kind<T extends SharedPermissionsHeavy2Union> = T['kind'];

export type SharedPermissionsHeavy2ByKind<K extends SharedPermissionsHeavy2Union['kind']> = Extract<SharedPermissionsHeavy2Union, { kind: K }>;

export type SharedPermissionsHeavy2MappedResult<T> = {
    field0: T extends { field0: infer U } ? U extends string ? Uppercase<U> : U : never;
    field1: T extends { field1: infer U } ? U extends string ? Uppercase<U> : U : never;
    field2: T extends { field2: infer U } ? U extends string ? Uppercase<U> : U : never;
    field3: T extends { field3: infer U } ? U extends string ? Uppercase<U> : U : never;
    field4: T extends { field4: infer U } ? U extends string ? Uppercase<U> : U : never;
    field5: T extends { field5: infer U } ? U extends string ? Uppercase<U> : U : never;
    field6: T extends { field6: infer U } ? U extends string ? Uppercase<U> : U : never;
    field7: T extends { field7: infer U } ? U extends string ? Uppercase<U> : U : never;
    field8: T extends { field8: infer U } ? U extends string ? Uppercase<U> : U : never;
    field9: T extends { field9: infer U } ? U extends string ? Uppercase<U> : U : never;
    field10: T extends { field10: infer U } ? U extends string ? Uppercase<U> : U : never;
    field11: T extends { field11: infer U } ? U extends string ? Uppercase<U> : U : never;
    field12: T extends { field12: infer U } ? U extends string ? Uppercase<U> : U : never;
    field13: T extends { field13: infer U } ? U extends string ? Uppercase<U> : U : never;
    field14: T extends { field14: infer U } ? U extends string ? Uppercase<U> : U : never;
    field15: T extends { field15: infer U } ? U extends string ? Uppercase<U> : U : never;
    field16: T extends { field16: infer U } ? U extends string ? Uppercase<U> : U : never;
};

export type SharedPermissionsHeavy2Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedPermissionsHeavy2Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedPermissionsHeavy2RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedPermissionsHeavy2RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedPermissionsHeavy2EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedPermissionsHeavy2Entity0 extends SharedPermissionsHeavy2EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy2Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy2Entity0[]>;
}

export interface SharedPermissionsHeavy2Entity1 extends SharedPermissionsHeavy2EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy2Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy2Entity1[]>;
}

export interface SharedPermissionsHeavy2Entity2 extends SharedPermissionsHeavy2EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy2Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy2Entity2[]>;
}

export interface SharedPermissionsHeavy2Entity3 extends SharedPermissionsHeavy2EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy2Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy2Entity3[]>;
}

export interface SharedPermissionsHeavy2Entity4 extends SharedPermissionsHeavy2EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy2Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy2Entity4[]>;
}

export interface SharedPermissionsHeavy2Entity5 extends SharedPermissionsHeavy2EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy2Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy2Entity5[]>;
}

export interface SharedPermissionsHeavy2Entity6 extends SharedPermissionsHeavy2EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy2Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy2Entity6[]>;
}

export interface SharedPermissionsHeavy2Entity7 extends SharedPermissionsHeavy2EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy2Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy2Entity7[]>;
}

export interface SharedPermissionsHeavy2Entity8 extends SharedPermissionsHeavy2EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy2Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy2Entity8[]>;
}

export interface SharedPermissionsHeavy2Entity9 extends SharedPermissionsHeavy2EntityBase {
  name9: string;
  value9: number;
  config9: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedPermissionsHeavy2Entity8 | null> };
      };
    }>;
  };
  relations: Map<string, SharedPermissionsHeavy2Entity9[]>;
}


export class SharedPermissionsHeavy2Registry {
  private entities = new Map<string, SharedPermissionsHeavy2EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedPermissionsHeavy2EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedPermissionsHeavy2EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedPermissionsHeavy2EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedPermissionsHeavy2EntityBase>(predicate: (entity: SharedPermissionsHeavy2EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): SharedPermissionsHeavy2EntityBase[] {
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

  toJSON(): Record<string, SharedPermissionsHeavy2EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedPermissionsHeavy2_CONSTANTS = {
  MAX_DEPTH: 7,
  UNION_SIZE: 22,
  VERSION: '2.2.2',
} as const;