// Complex type computations for SharedTestingHeavy5
export type DeepReadonlySharedTestingHeavy5<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedTestingHeavy5<U>>
      : DeepReadonlySharedTestingHeavy5<T[P]>
    : T[P];
};

export type DeepPartialSharedTestingHeavy5<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedTestingHeavy5<U>>
      : DeepPartialSharedTestingHeavy5<T[P]>
    : T[P];
};

export type SharedTestingHeavy5Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>;

export type SharedTestingHeavy5Union =
  | { kind: 'SharedTestingHeavy5_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_22'; data_22: string; nested_22: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_23'; data_23: string; nested_23: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy5_variant_24'; data_24: string; nested_24: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedTestingHeavy5Kind<T extends SharedTestingHeavy5Union> = T['kind'];

export type SharedTestingHeavy5ByKind<K extends SharedTestingHeavy5Union['kind']> = Extract<SharedTestingHeavy5Union, { kind: K }>;

export type SharedTestingHeavy5MappedResult<T> = {
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
};

export type SharedTestingHeavy5Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedTestingHeavy5Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedTestingHeavy5RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedTestingHeavy5RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedTestingHeavy5EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedTestingHeavy5Entity0 extends SharedTestingHeavy5EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy5Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy5Entity0[]>;
}

export interface SharedTestingHeavy5Entity1 extends SharedTestingHeavy5EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy5Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy5Entity1[]>;
}

export interface SharedTestingHeavy5Entity2 extends SharedTestingHeavy5EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy5Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy5Entity2[]>;
}

export interface SharedTestingHeavy5Entity3 extends SharedTestingHeavy5EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy5Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy5Entity3[]>;
}

export interface SharedTestingHeavy5Entity4 extends SharedTestingHeavy5EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy5Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy5Entity4[]>;
}

export interface SharedTestingHeavy5Entity5 extends SharedTestingHeavy5EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy5Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy5Entity5[]>;
}

export interface SharedTestingHeavy5Entity6 extends SharedTestingHeavy5EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy5Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy5Entity6[]>;
}

export interface SharedTestingHeavy5Entity7 extends SharedTestingHeavy5EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy5Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy5Entity7[]>;
}


export class SharedTestingHeavy5Registry {
  private entities = new Map<string, SharedTestingHeavy5EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedTestingHeavy5EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedTestingHeavy5EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedTestingHeavy5EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedTestingHeavy5EntityBase>(predicate: (entity: SharedTestingHeavy5EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): SharedTestingHeavy5EntityBase[] {
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

  toJSON(): Record<string, SharedTestingHeavy5EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedTestingHeavy5_CONSTANTS = {
  MAX_DEPTH: 5,
  UNION_SIZE: 25,
  VERSION: '5.5.5',
} as const;