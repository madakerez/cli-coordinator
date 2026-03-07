// Complex type computations for App2FeatureImportHeavy16
export type DeepReadonlyApp2FeatureImportHeavy16<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlyApp2FeatureImportHeavy16<U>>
      : DeepReadonlyApp2FeatureImportHeavy16<T[P]>
    : T[P];
};

export type DeepPartialApp2FeatureImportHeavy16<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialApp2FeatureImportHeavy16<U>>
      : DeepPartialApp2FeatureImportHeavy16<T[P]>
    : T[P];
};

export type App2FeatureImportHeavy16Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, T>>>>>>>>>>>>>>>>>>>>>>>>;

export type App2FeatureImportHeavy16Union =
  | { kind: 'App2FeatureImportHeavy16_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_22'; data_22: string; nested_22: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_23'; data_23: string; nested_23: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_24'; data_24: string; nested_24: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_25'; data_25: string; nested_25: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_26'; data_26: string; nested_26: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_27'; data_27: string; nested_27: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_28'; data_28: string; nested_28: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_29'; data_29: string; nested_29: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_30'; data_30: string; nested_30: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_31'; data_31: string; nested_31: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_32'; data_32: string; nested_32: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_33'; data_33: string; nested_33: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_34'; data_34: string; nested_34: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'App2FeatureImportHeavy16_variant_35'; data_35: string; nested_35: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractApp2FeatureImportHeavy16Kind<T extends App2FeatureImportHeavy16Union> = T['kind'];

export type App2FeatureImportHeavy16ByKind<K extends App2FeatureImportHeavy16Union['kind']> = Extract<App2FeatureImportHeavy16Union, { kind: K }>;

export type App2FeatureImportHeavy16MappedResult<T> = {
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
    field20: T extends { field20: infer U } ? U extends string ? Uppercase<U> : U : never;
};

export type App2FeatureImportHeavy16Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: App2FeatureImportHeavy16Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type App2FeatureImportHeavy16RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? App2FeatureImportHeavy16RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface App2FeatureImportHeavy16EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface App2FeatureImportHeavy16Entity0 extends App2FeatureImportHeavy16EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App2FeatureImportHeavy16Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, App2FeatureImportHeavy16Entity0[]>;
}

export interface App2FeatureImportHeavy16Entity1 extends App2FeatureImportHeavy16EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App2FeatureImportHeavy16Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, App2FeatureImportHeavy16Entity1[]>;
}

export interface App2FeatureImportHeavy16Entity2 extends App2FeatureImportHeavy16EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App2FeatureImportHeavy16Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, App2FeatureImportHeavy16Entity2[]>;
}

export interface App2FeatureImportHeavy16Entity3 extends App2FeatureImportHeavy16EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App2FeatureImportHeavy16Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, App2FeatureImportHeavy16Entity3[]>;
}

export interface App2FeatureImportHeavy16Entity4 extends App2FeatureImportHeavy16EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App2FeatureImportHeavy16Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, App2FeatureImportHeavy16Entity4[]>;
}

export interface App2FeatureImportHeavy16Entity5 extends App2FeatureImportHeavy16EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App2FeatureImportHeavy16Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, App2FeatureImportHeavy16Entity5[]>;
}

export interface App2FeatureImportHeavy16Entity6 extends App2FeatureImportHeavy16EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App2FeatureImportHeavy16Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, App2FeatureImportHeavy16Entity6[]>;
}

export interface App2FeatureImportHeavy16Entity7 extends App2FeatureImportHeavy16EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App2FeatureImportHeavy16Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, App2FeatureImportHeavy16Entity7[]>;
}

export interface App2FeatureImportHeavy16Entity8 extends App2FeatureImportHeavy16EntityBase {
  name8: string;
  value8: number;
  config8: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, App2FeatureImportHeavy16Entity7 | null> };
      };
    }>;
  };
  relations: Map<string, App2FeatureImportHeavy16Entity8[]>;
}


export class App2FeatureImportHeavy16Registry {
  private entities = new Map<string, App2FeatureImportHeavy16EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends App2FeatureImportHeavy16EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): App2FeatureImportHeavy16EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): App2FeatureImportHeavy16EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends App2FeatureImportHeavy16EntityBase>(predicate: (entity: App2FeatureImportHeavy16EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): App2FeatureImportHeavy16EntityBase[] {
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

  toJSON(): Record<string, App2FeatureImportHeavy16EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const App2FeatureImportHeavy16_CONSTANTS = {
  MAX_DEPTH: 6,
  UNION_SIZE: 36,
  VERSION: '16.6.16',
} as const;