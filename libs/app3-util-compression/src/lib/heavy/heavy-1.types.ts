// Complex type computations for App3UtilCompressionHeavy1
export type DeepReadonlyApp3UtilCompressionHeavy1<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlyApp3UtilCompressionHeavy1<U>>
      : DeepReadonlyApp3UtilCompressionHeavy1<T[P]>
    : T[P];
};

export type DeepPartialApp3UtilCompressionHeavy1<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialApp3UtilCompressionHeavy1<U>>
      : DeepPartialApp3UtilCompressionHeavy1<T[P]>
    : T[P];
};

export type App3UtilCompressionHeavy1Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, T>>>>>>>>>>>>>>>>>>>>>>>>;

export type App3UtilCompressionHeavy1Union =
  | { kind: 'App3UtilCompressionHeavy1_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App3UtilCompressionHeavy1_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractApp3UtilCompressionHeavy1Kind<T extends App3UtilCompressionHeavy1Union> = T['kind'];

export type App3UtilCompressionHeavy1ByKind<K extends App3UtilCompressionHeavy1Union['kind']> = Extract<App3UtilCompressionHeavy1Union, { kind: K }>;

export type App3UtilCompressionHeavy1MappedResult<T> = {
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
};

export type App3UtilCompressionHeavy1Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: App3UtilCompressionHeavy1Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type App3UtilCompressionHeavy1RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? App3UtilCompressionHeavy1RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface App3UtilCompressionHeavy1EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface App3UtilCompressionHeavy1Entity0 extends App3UtilCompressionHeavy1EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UtilCompressionHeavy1Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, App3UtilCompressionHeavy1Entity0[]>;
}

export interface App3UtilCompressionHeavy1Entity1 extends App3UtilCompressionHeavy1EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UtilCompressionHeavy1Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, App3UtilCompressionHeavy1Entity1[]>;
}

export interface App3UtilCompressionHeavy1Entity2 extends App3UtilCompressionHeavy1EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UtilCompressionHeavy1Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, App3UtilCompressionHeavy1Entity2[]>;
}

export interface App3UtilCompressionHeavy1Entity3 extends App3UtilCompressionHeavy1EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UtilCompressionHeavy1Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, App3UtilCompressionHeavy1Entity3[]>;
}

export interface App3UtilCompressionHeavy1Entity4 extends App3UtilCompressionHeavy1EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UtilCompressionHeavy1Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, App3UtilCompressionHeavy1Entity4[]>;
}

export interface App3UtilCompressionHeavy1Entity5 extends App3UtilCompressionHeavy1EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UtilCompressionHeavy1Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, App3UtilCompressionHeavy1Entity5[]>;
}

export interface App3UtilCompressionHeavy1Entity6 extends App3UtilCompressionHeavy1EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UtilCompressionHeavy1Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, App3UtilCompressionHeavy1Entity6[]>;
}

export interface App3UtilCompressionHeavy1Entity7 extends App3UtilCompressionHeavy1EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UtilCompressionHeavy1Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, App3UtilCompressionHeavy1Entity7[]>;
}

export interface App3UtilCompressionHeavy1Entity8 extends App3UtilCompressionHeavy1EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App3UtilCompressionHeavy1Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, App3UtilCompressionHeavy1Entity8[]>;
}


export class App3UtilCompressionHeavy1Registry {
  private entities = new Map<string, App3UtilCompressionHeavy1EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends App3UtilCompressionHeavy1EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): App3UtilCompressionHeavy1EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): App3UtilCompressionHeavy1EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends App3UtilCompressionHeavy1EntityBase>(predicate: (entity: App3UtilCompressionHeavy1EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): App3UtilCompressionHeavy1EntityBase[] {
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

  toJSON(): Record<string, App3UtilCompressionHeavy1EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const App3UtilCompressionHeavy1_CONSTANTS = {
  MAX_DEPTH: 6,
  UNION_SIZE: 21,
  VERSION: '1.1.1',
} as const;