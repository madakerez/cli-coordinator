// Complex type computations for SharedUtilsHeavy1
export type DeepReadonlySharedUtilsHeavy1<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedUtilsHeavy1<U>>
      : DeepReadonlySharedUtilsHeavy1<T[P]>
    : T[P];
};

export type DeepPartialSharedUtilsHeavy1<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedUtilsHeavy1<U>>
      : DeepPartialSharedUtilsHeavy1<T[P]>
    : T[P];
};

export type SharedUtilsHeavy1Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>>>>>;

export type SharedUtilsHeavy1Union =
  | { kind: 'SharedUtilsHeavy1_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedUtilsHeavy1_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedUtilsHeavy1Kind<T extends SharedUtilsHeavy1Union> = T['kind'];

export type SharedUtilsHeavy1ByKind<K extends SharedUtilsHeavy1Union['kind']> = Extract<SharedUtilsHeavy1Union, { kind: K }>;

export type SharedUtilsHeavy1MappedResult<T> = {
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

export type SharedUtilsHeavy1Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedUtilsHeavy1Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedUtilsHeavy1RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedUtilsHeavy1RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedUtilsHeavy1EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedUtilsHeavy1Entity0 extends SharedUtilsHeavy1EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedUtilsHeavy1Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedUtilsHeavy1Entity0[]>;
}

export interface SharedUtilsHeavy1Entity1 extends SharedUtilsHeavy1EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedUtilsHeavy1Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedUtilsHeavy1Entity1[]>;
}

export interface SharedUtilsHeavy1Entity2 extends SharedUtilsHeavy1EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedUtilsHeavy1Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedUtilsHeavy1Entity2[]>;
}

export interface SharedUtilsHeavy1Entity3 extends SharedUtilsHeavy1EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedUtilsHeavy1Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedUtilsHeavy1Entity3[]>;
}

export interface SharedUtilsHeavy1Entity4 extends SharedUtilsHeavy1EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedUtilsHeavy1Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedUtilsHeavy1Entity4[]>;
}

export interface SharedUtilsHeavy1Entity5 extends SharedUtilsHeavy1EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedUtilsHeavy1Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedUtilsHeavy1Entity5[]>;
}

export interface SharedUtilsHeavy1Entity6 extends SharedUtilsHeavy1EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedUtilsHeavy1Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedUtilsHeavy1Entity6[]>;
}

export interface SharedUtilsHeavy1Entity7 extends SharedUtilsHeavy1EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedUtilsHeavy1Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedUtilsHeavy1Entity7[]>;
}

export interface SharedUtilsHeavy1Entity8 extends SharedUtilsHeavy1EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedUtilsHeavy1Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, SharedUtilsHeavy1Entity8[]>;
}


export class SharedUtilsHeavy1Registry {
  private entities = new Map<string, SharedUtilsHeavy1EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedUtilsHeavy1EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedUtilsHeavy1EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedUtilsHeavy1EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedUtilsHeavy1EntityBase>(predicate: (entity: SharedUtilsHeavy1EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): SharedUtilsHeavy1EntityBase[] {
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

  toJSON(): Record<string, SharedUtilsHeavy1EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedUtilsHeavy1_CONSTANTS = {
  MAX_DEPTH: 6,
  UNION_SIZE: 21,
  VERSION: '1.1.1',
} as const;