// Complex type computations for App3UiTreeHeavy11
export type DeepReadonlyApp3UiTreeHeavy11<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlyApp3UiTreeHeavy11<U>>
      : DeepReadonlyApp3UiTreeHeavy11<T[P]>
    : T[P];
};

export type DeepPartialApp3UiTreeHeavy11<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialApp3UiTreeHeavy11<U>>
      : DeepPartialApp3UiTreeHeavy11<T[P]>
    : T[P];
};

export type App3UiTreeHeavy11Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>>>>>;

export type App3UiTreeHeavy11Union =
  | { kind: 'App3UiTreeHeavy11_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_22'; data_22: string; nested_22: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_23'; data_23: string; nested_23: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_24'; data_24: string; nested_24: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_25'; data_25: string; nested_25: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_26'; data_26: string; nested_26: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_27'; data_27: string; nested_27: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_28'; data_28: string; nested_28: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_29'; data_29: string; nested_29: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UiTreeHeavy11_variant_30'; data_30: string; nested_30: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractApp3UiTreeHeavy11Kind<T extends App3UiTreeHeavy11Union> = T['kind'];

export type App3UiTreeHeavy11ByKind<K extends App3UiTreeHeavy11Union['kind']> = Extract<App3UiTreeHeavy11Union, { kind: K }>;

export type App3UiTreeHeavy11MappedResult<T> = {
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

export type App3UiTreeHeavy11Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: App3UiTreeHeavy11Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type App3UiTreeHeavy11RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? App3UiTreeHeavy11RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface App3UiTreeHeavy11EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface App3UiTreeHeavy11Entity0 extends App3UiTreeHeavy11EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UiTreeHeavy11Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, App3UiTreeHeavy11Entity0[]>;
}

export interface App3UiTreeHeavy11Entity1 extends App3UiTreeHeavy11EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UiTreeHeavy11Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, App3UiTreeHeavy11Entity1[]>;
}

export interface App3UiTreeHeavy11Entity2 extends App3UiTreeHeavy11EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UiTreeHeavy11Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, App3UiTreeHeavy11Entity2[]>;
}

export interface App3UiTreeHeavy11Entity3 extends App3UiTreeHeavy11EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UiTreeHeavy11Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, App3UiTreeHeavy11Entity3[]>;
}

export interface App3UiTreeHeavy11Entity4 extends App3UiTreeHeavy11EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UiTreeHeavy11Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, App3UiTreeHeavy11Entity4[]>;
}

export interface App3UiTreeHeavy11Entity5 extends App3UiTreeHeavy11EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UiTreeHeavy11Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, App3UiTreeHeavy11Entity5[]>;
}

export interface App3UiTreeHeavy11Entity6 extends App3UiTreeHeavy11EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UiTreeHeavy11Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, App3UiTreeHeavy11Entity6[]>;
}

export interface App3UiTreeHeavy11Entity7 extends App3UiTreeHeavy11EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UiTreeHeavy11Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, App3UiTreeHeavy11Entity7[]>;
}

export interface App3UiTreeHeavy11Entity8 extends App3UiTreeHeavy11EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UiTreeHeavy11Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, App3UiTreeHeavy11Entity8[]>;
}


export class App3UiTreeHeavy11Registry {
  private entities = new Map<string, App3UiTreeHeavy11EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends App3UiTreeHeavy11EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): App3UiTreeHeavy11EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): App3UiTreeHeavy11EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends App3UiTreeHeavy11EntityBase>(predicate: (entity: App3UiTreeHeavy11EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): App3UiTreeHeavy11EntityBase[] {
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

  toJSON(): Record<string, App3UiTreeHeavy11EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const App3UiTreeHeavy11_CONSTANTS = {
  MAX_DEPTH: 6,
  UNION_SIZE: 31,
  VERSION: '11.1.11',
} as const;