// Complex type computations for SharedConfigHeavy4
export type DeepReadonlySharedConfigHeavy4<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedConfigHeavy4<U>>
      : DeepReadonlySharedConfigHeavy4<T[P]>
    : T[P];
};

export type DeepPartialSharedConfigHeavy4<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedConfigHeavy4<U>>
      : DeepPartialSharedConfigHeavy4<T[P]>
    : T[P];
};

export type SharedConfigHeavy4Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>;

export type SharedConfigHeavy4Union =
  | { kind: 'SharedConfigHeavy4_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_22'; data_22: string; nested_22: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedConfigHeavy4_variant_23'; data_23: string; nested_23: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedConfigHeavy4Kind<T extends SharedConfigHeavy4Union> = T['kind'];

export type SharedConfigHeavy4ByKind<K extends SharedConfigHeavy4Union['kind']> = Extract<SharedConfigHeavy4Union, { kind: K }>;

export type SharedConfigHeavy4MappedResult<T> = {
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
};

export type SharedConfigHeavy4Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedConfigHeavy4Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedConfigHeavy4RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedConfigHeavy4RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedConfigHeavy4EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedConfigHeavy4Entity0 extends SharedConfigHeavy4EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity0[]>;
}

export interface SharedConfigHeavy4Entity1 extends SharedConfigHeavy4EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity1[]>;
}

export interface SharedConfigHeavy4Entity2 extends SharedConfigHeavy4EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity2[]>;
}

export interface SharedConfigHeavy4Entity3 extends SharedConfigHeavy4EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity3[]>;
}

export interface SharedConfigHeavy4Entity4 extends SharedConfigHeavy4EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity4[]>;
}

export interface SharedConfigHeavy4Entity5 extends SharedConfigHeavy4EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity5[]>;
}

export interface SharedConfigHeavy4Entity6 extends SharedConfigHeavy4EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity6[]>;
}

export interface SharedConfigHeavy4Entity7 extends SharedConfigHeavy4EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity7[]>;
}

export interface SharedConfigHeavy4Entity8 extends SharedConfigHeavy4EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity8[]>;
}

export interface SharedConfigHeavy4Entity9 extends SharedConfigHeavy4EntityBase {
  name9: string;
  value9: number;
  config9: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity8 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity9[]>;
}

export interface SharedConfigHeavy4Entity10 extends SharedConfigHeavy4EntityBase {
  name10: string;
  value10: number;
  config10: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity9 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity10[]>;
}

export interface SharedConfigHeavy4Entity11 extends SharedConfigHeavy4EntityBase {
  name11: string;
  value11: number;
  config11: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedConfigHeavy4Entity10 | null> };
      };
    }>;
  };
  relations: Map<string, SharedConfigHeavy4Entity11[]>;
}


export class SharedConfigHeavy4Registry {
  private entities = new Map<string, SharedConfigHeavy4EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedConfigHeavy4EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedConfigHeavy4EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedConfigHeavy4EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedConfigHeavy4EntityBase>(predicate: (entity: SharedConfigHeavy4EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): SharedConfigHeavy4EntityBase[] {
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

  toJSON(): Record<string, SharedConfigHeavy4EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedConfigHeavy4_CONSTANTS = {
  MAX_DEPTH: 9,
  UNION_SIZE: 24,
  VERSION: '4.4.4',
} as const;