// Complex type computations for App4UtilParsersHeavy2
export type DeepReadonlyApp4UtilParsersHeavy2<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlyApp4UtilParsersHeavy2<U>>
      : DeepReadonlyApp4UtilParsersHeavy2<T[P]>
    : T[P];
};

export type DeepPartialApp4UtilParsersHeavy2<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialApp4UtilParsersHeavy2<U>>
      : DeepPartialApp4UtilParsersHeavy2<T[P]>
    : T[P];
};

export type App4UtilParsersHeavy2Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>>>>>>>>>;

export type App4UtilParsersHeavy2Union =
  | { kind: 'App4UtilParsersHeavy2_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App4UtilParsersHeavy2_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractApp4UtilParsersHeavy2Kind<T extends App4UtilParsersHeavy2Union> = T['kind'];

export type App4UtilParsersHeavy2ByKind<K extends App4UtilParsersHeavy2Union['kind']> = Extract<App4UtilParsersHeavy2Union, { kind: K }>;

export type App4UtilParsersHeavy2MappedResult<T> = {
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
};

export type App4UtilParsersHeavy2Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: App4UtilParsersHeavy2Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type App4UtilParsersHeavy2RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? App4UtilParsersHeavy2RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface App4UtilParsersHeavy2EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface App4UtilParsersHeavy2Entity0 extends App4UtilParsersHeavy2EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App4UtilParsersHeavy2Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, App4UtilParsersHeavy2Entity0[]>;
}

export interface App4UtilParsersHeavy2Entity1 extends App4UtilParsersHeavy2EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App4UtilParsersHeavy2Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, App4UtilParsersHeavy2Entity1[]>;
}

export interface App4UtilParsersHeavy2Entity2 extends App4UtilParsersHeavy2EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App4UtilParsersHeavy2Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, App4UtilParsersHeavy2Entity2[]>;
}

export interface App4UtilParsersHeavy2Entity3 extends App4UtilParsersHeavy2EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App4UtilParsersHeavy2Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, App4UtilParsersHeavy2Entity3[]>;
}

export interface App4UtilParsersHeavy2Entity4 extends App4UtilParsersHeavy2EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App4UtilParsersHeavy2Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, App4UtilParsersHeavy2Entity4[]>;
}

export interface App4UtilParsersHeavy2Entity5 extends App4UtilParsersHeavy2EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App4UtilParsersHeavy2Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, App4UtilParsersHeavy2Entity5[]>;
}

export interface App4UtilParsersHeavy2Entity6 extends App4UtilParsersHeavy2EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App4UtilParsersHeavy2Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, App4UtilParsersHeavy2Entity6[]>;
}

export interface App4UtilParsersHeavy2Entity7 extends App4UtilParsersHeavy2EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App4UtilParsersHeavy2Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, App4UtilParsersHeavy2Entity7[]>;
}

export interface App4UtilParsersHeavy2Entity8 extends App4UtilParsersHeavy2EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App4UtilParsersHeavy2Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, App4UtilParsersHeavy2Entity8[]>;
}

export interface App4UtilParsersHeavy2Entity9 extends App4UtilParsersHeavy2EntityBase {
  name9: string;
  value9: number;
  config9: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App4UtilParsersHeavy2Entity8 | null> };
      };
    }>;
  };
  relations: Map<string, App4UtilParsersHeavy2Entity9[]>;
}


export class App4UtilParsersHeavy2Registry {
  private entities = new Map<string, App4UtilParsersHeavy2EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends App4UtilParsersHeavy2EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): App4UtilParsersHeavy2EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): App4UtilParsersHeavy2EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends App4UtilParsersHeavy2EntityBase>(predicate: (entity: App4UtilParsersHeavy2EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): App4UtilParsersHeavy2EntityBase[] {
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

  toJSON(): Record<string, App4UtilParsersHeavy2EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const App4UtilParsersHeavy2_CONSTANTS = {
  MAX_DEPTH: 7,
  UNION_SIZE: 22,
  VERSION: '2.2.2',
} as const;