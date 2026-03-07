// Complex type computations for SharedTestingHeavy31
export type DeepReadonlySharedTestingHeavy31<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedTestingHeavy31<U>>
      : DeepReadonlySharedTestingHeavy31<T[P]>
    : T[P];
};

export type DeepPartialSharedTestingHeavy31<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedTestingHeavy31<U>>
      : DeepPartialSharedTestingHeavy31<T[P]>
    : T[P];
};

export type SharedTestingHeavy31Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>>>>>;

export type SharedTestingHeavy31Union =
  | { kind: 'SharedTestingHeavy31_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedTestingHeavy31_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedTestingHeavy31Kind<T extends SharedTestingHeavy31Union> = T['kind'];

export type SharedTestingHeavy31ByKind<K extends SharedTestingHeavy31Union['kind']> = Extract<SharedTestingHeavy31Union, { kind: K }>;

export type SharedTestingHeavy31MappedResult<T> = {
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

export type SharedTestingHeavy31Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedTestingHeavy31Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedTestingHeavy31RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedTestingHeavy31RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedTestingHeavy31EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedTestingHeavy31Entity0 extends SharedTestingHeavy31EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy31Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy31Entity0[]>;
}

export interface SharedTestingHeavy31Entity1 extends SharedTestingHeavy31EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy31Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy31Entity1[]>;
}

export interface SharedTestingHeavy31Entity2 extends SharedTestingHeavy31EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy31Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy31Entity2[]>;
}

export interface SharedTestingHeavy31Entity3 extends SharedTestingHeavy31EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy31Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy31Entity3[]>;
}

export interface SharedTestingHeavy31Entity4 extends SharedTestingHeavy31EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy31Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy31Entity4[]>;
}

export interface SharedTestingHeavy31Entity5 extends SharedTestingHeavy31EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy31Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy31Entity5[]>;
}

export interface SharedTestingHeavy31Entity6 extends SharedTestingHeavy31EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy31Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy31Entity6[]>;
}

export interface SharedTestingHeavy31Entity7 extends SharedTestingHeavy31EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy31Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy31Entity7[]>;
}

export interface SharedTestingHeavy31Entity8 extends SharedTestingHeavy31EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedTestingHeavy31Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, SharedTestingHeavy31Entity8[]>;
}


export class SharedTestingHeavy31Registry {
  private entities = new Map<string, SharedTestingHeavy31EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedTestingHeavy31EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedTestingHeavy31EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedTestingHeavy31EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedTestingHeavy31EntityBase>(predicate: (entity: SharedTestingHeavy31EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): SharedTestingHeavy31EntityBase[] {
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

  toJSON(): Record<string, SharedTestingHeavy31EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedTestingHeavy31_CONSTANTS = {
  MAX_DEPTH: 6,
  UNION_SIZE: 21,
  VERSION: '31.1.31',
} as const;