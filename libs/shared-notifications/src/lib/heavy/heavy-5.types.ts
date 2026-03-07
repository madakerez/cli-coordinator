// Complex type computations for SharedNotificationsHeavy5
export type DeepReadonlySharedNotificationsHeavy5<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedNotificationsHeavy5<U>>
      : DeepReadonlySharedNotificationsHeavy5<T[P]>
    : T[P];
};

export type DeepPartialSharedNotificationsHeavy5<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedNotificationsHeavy5<U>>
      : DeepPartialSharedNotificationsHeavy5<T[P]>
    : T[P];
};

export type SharedNotificationsHeavy5Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, T>>>>>>>>>>>>>>>>>>>>;

export type SharedNotificationsHeavy5Union =
  | { kind: 'SharedNotificationsHeavy5_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_22'; data_22: string; nested_22: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_23'; data_23: string; nested_23: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedNotificationsHeavy5_variant_24'; data_24: string; nested_24: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedNotificationsHeavy5Kind<T extends SharedNotificationsHeavy5Union> = T['kind'];

export type SharedNotificationsHeavy5ByKind<K extends SharedNotificationsHeavy5Union['kind']> = Extract<SharedNotificationsHeavy5Union, { kind: K }>;

export type SharedNotificationsHeavy5MappedResult<T> = {
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
    field17: T extends { field17: infer U } ? U extends string ? Uppercase<U> : U : never;
    field18: T extends { field18: infer U } ? U extends string ? Uppercase<U> : U : never;
    field19: T extends { field19: infer U } ? U extends string ? Uppercase<U> : U : never;
};

export type SharedNotificationsHeavy5Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedNotificationsHeavy5Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedNotificationsHeavy5RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedNotificationsHeavy5RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedNotificationsHeavy5EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedNotificationsHeavy5Entity0 extends SharedNotificationsHeavy5EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedNotificationsHeavy5Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedNotificationsHeavy5Entity0[]>;
}

export interface SharedNotificationsHeavy5Entity1 extends SharedNotificationsHeavy5EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedNotificationsHeavy5Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedNotificationsHeavy5Entity1[]>;
}

export interface SharedNotificationsHeavy5Entity2 extends SharedNotificationsHeavy5EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedNotificationsHeavy5Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedNotificationsHeavy5Entity2[]>;
}

export interface SharedNotificationsHeavy5Entity3 extends SharedNotificationsHeavy5EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedNotificationsHeavy5Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedNotificationsHeavy5Entity3[]>;
}

export interface SharedNotificationsHeavy5Entity4 extends SharedNotificationsHeavy5EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedNotificationsHeavy5Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedNotificationsHeavy5Entity4[]>;
}

export interface SharedNotificationsHeavy5Entity5 extends SharedNotificationsHeavy5EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedNotificationsHeavy5Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedNotificationsHeavy5Entity5[]>;
}

export interface SharedNotificationsHeavy5Entity6 extends SharedNotificationsHeavy5EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedNotificationsHeavy5Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedNotificationsHeavy5Entity6[]>;
}

export interface SharedNotificationsHeavy5Entity7 extends SharedNotificationsHeavy5EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedNotificationsHeavy5Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedNotificationsHeavy5Entity7[]>;
}


export class SharedNotificationsHeavy5Registry {
  private entities = new Map<string, SharedNotificationsHeavy5EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedNotificationsHeavy5EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedNotificationsHeavy5EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedNotificationsHeavy5EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedNotificationsHeavy5EntityBase>(predicate: (entity: SharedNotificationsHeavy5EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): SharedNotificationsHeavy5EntityBase[] {
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

  toJSON(): Record<string, SharedNotificationsHeavy5EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedNotificationsHeavy5_CONSTANTS = {
  MAX_DEPTH: 5,
  UNION_SIZE: 25,
  VERSION: '5.5.5',
} as const;