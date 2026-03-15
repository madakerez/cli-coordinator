// Complex type computations for SharedCryptoHeavy25
export type DeepReadonlySharedCryptoHeavy25<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Array<infer U>
      ? ReadonlyArray<DeepReadonlySharedCryptoHeavy25<U>>
      : DeepReadonlySharedCryptoHeavy25<T[P]>
    : T[P];
};

export type DeepPartialSharedCryptoHeavy25<T> = {
  [P in keyof T]?: T[P] extends object
    ? T[P] extends Array<infer U>
      ? Array<DeepPartialSharedCryptoHeavy25<U>>
      : DeepPartialSharedCryptoHeavy25<T[P]>
    : T[P];
};

export type SharedCryptoHeavy25Nested = Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, Promise<Array<Partial<Record<string, string>>>>>>>>>>>>>>>>>>>>;

export type SharedCryptoHeavy25Union =
  | { kind: 'SharedCryptoHeavy25_variant_0'; data_0: string; nested_0: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_1'; data_1: string; nested_1: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_2'; data_2: string; nested_2: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_3'; data_3: string; nested_3: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_4'; data_4: string; nested_4: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_5'; data_5: string; nested_5: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_6'; data_6: string; nested_6: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_7'; data_7: string; nested_7: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_8'; data_8: string; nested_8: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_9'; data_9: string; nested_9: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_10'; data_10: string; nested_10: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_11'; data_11: string; nested_11: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_12'; data_12: string; nested_12: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_13'; data_13: string; nested_13: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_14'; data_14: string; nested_14: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_15'; data_15: string; nested_15: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_16'; data_16: string; nested_16: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_17'; data_17: string; nested_17: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_18'; data_18: string; nested_18: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_19'; data_19: string; nested_19: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_20'; data_20: string; nested_20: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_21'; data_21: string; nested_21: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_22'; data_22: string; nested_22: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_23'; data_23: string; nested_23: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_24'; data_24: string; nested_24: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_25'; data_25: string; nested_25: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_26'; data_26: string; nested_26: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_27'; data_27: string; nested_27: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_28'; data_28: string; nested_28: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_29'; data_29: string; nested_29: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_30'; data_30: string; nested_30: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_31'; data_31: string; nested_31: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_32'; data_32: string; nested_32: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_33'; data_33: string; nested_33: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_34'; data_34: string; nested_34: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_35'; data_35: string; nested_35: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_36'; data_36: string; nested_36: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_37'; data_37: string; nested_37: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_38'; data_38: string; nested_38: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_39'; data_39: string; nested_39: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_40'; data_40: string; nested_40: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_41'; data_41: string; nested_41: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_42'; data_42: string; nested_42: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_43'; data_43: string; nested_43: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date }
  | { kind: 'SharedCryptoHeavy25_variant_44'; data_44: string; nested_44: { value: number; items: Array<{ id: string; meta: Record<string, unknown> }> }; timestamp: Date };

export type ExtractSharedCryptoHeavy25Kind<T extends SharedCryptoHeavy25Union> = T['kind'];

export type SharedCryptoHeavy25ByKind<K extends SharedCryptoHeavy25Union['kind']> = Extract<SharedCryptoHeavy25Union, { kind: K }>;

export type SharedCryptoHeavy25MappedResult<T> = {
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

export type SharedCryptoHeavy25Conditional<T, U> =
  T extends string
    ? U extends number
      ? { type: 'string-number'; value: `${T}_${U}` }
      : U extends boolean
        ? { type: 'string-boolean'; value: T }
        : { type: 'string-other'; value: unknown }
    : T extends number
      ? { type: 'number'; value: T }
      : T extends Array<infer V>
        ? { type: 'array'; value: V; items: SharedCryptoHeavy25Conditional<V, U>[] }
        : { type: 'other'; value: T };

export type SharedCryptoHeavy25RecursivePartial<T, Depth extends number[] = []> =
  Depth['length'] extends 5
    ? T
    : {
        [K in keyof T]?: T[K] extends object
          ? SharedCryptoHeavy25RecursivePartial<T[K], [...Depth, 1]>
          : T[K];
      };

export interface SharedCryptoHeavy25EntityBase {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  metadata: Record<string, unknown>;
}


export interface SharedCryptoHeavy25Entity0 extends SharedCryptoHeavy25EntityBase {
  name0: string;
  value0: number;
  config0: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedCryptoHeavy25Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedCryptoHeavy25Entity0[]>;
}

export interface SharedCryptoHeavy25Entity1 extends SharedCryptoHeavy25EntityBase {
  name1: string;
  value1: number;
  config1: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedCryptoHeavy25Entity0 | null> };
      };
    }>;
  };
  relations: Map<string, SharedCryptoHeavy25Entity1[]>;
}

export interface SharedCryptoHeavy25Entity2 extends SharedCryptoHeavy25EntityBase {
  name2: string;
  value2: number;
  config2: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedCryptoHeavy25Entity1 | null> };
      };
    }>;
  };
  relations: Map<string, SharedCryptoHeavy25Entity2[]>;
}

export interface SharedCryptoHeavy25Entity3 extends SharedCryptoHeavy25EntityBase {
  name3: string;
  value3: number;
  config3: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedCryptoHeavy25Entity2 | null> };
      };
    }>;
  };
  relations: Map<string, SharedCryptoHeavy25Entity3[]>;
}

export interface SharedCryptoHeavy25Entity4 extends SharedCryptoHeavy25EntityBase {
  name4: string;
  value4: number;
  config4: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedCryptoHeavy25Entity3 | null> };
      };
    }>;
  };
  relations: Map<string, SharedCryptoHeavy25Entity4[]>;
}

export interface SharedCryptoHeavy25Entity5 extends SharedCryptoHeavy25EntityBase {
  name5: string;
  value5: number;
  config5: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedCryptoHeavy25Entity4 | null> };
      };
    }>;
  };
  relations: Map<string, SharedCryptoHeavy25Entity5[]>;
}

export interface SharedCryptoHeavy25Entity6 extends SharedCryptoHeavy25EntityBase {
  name6: string;
  value6: number;
  config6: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedCryptoHeavy25Entity5 | null> };
      };
    }>;
  };
  relations: Map<string, SharedCryptoHeavy25Entity6[]>;
}

export interface SharedCryptoHeavy25Entity7 extends SharedCryptoHeavy25EntityBase {
  name7: string;
  value7: number;
  config7: {
    enabled: boolean;
    options: Array<{
      key: string;
      value: unknown;
      nested: {
        deep: { level: number; data: Record<string, SharedCryptoHeavy25Entity6 | null> };
      };
    }>;
  };
  relations: Map<string, SharedCryptoHeavy25Entity7[]>;
}


export class SharedCryptoHeavy25Registry {
  private entities = new Map<string, SharedCryptoHeavy25EntityBase>();
  private indexes = new Map<string, Map<string, Set<string>>>();

  register<T extends SharedCryptoHeavy25EntityBase>(entity: T): void {
    this.entities.set(entity.id, entity);
  }

  findById(id: string): SharedCryptoHeavy25EntityBase | undefined {
    return this.entities.get(id);
  }

  findAll(): SharedCryptoHeavy25EntityBase[] {
    return Array.from(this.entities.values());
  }

  query<T extends SharedCryptoHeavy25EntityBase>(predicate: (entity: SharedCryptoHeavy25EntityBase) => entity is T): T[] {
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

  lookupByIndex(field: string, value: string): SharedCryptoHeavy25EntityBase[] {
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

  toJSON(): Record<string, SharedCryptoHeavy25EntityBase> {
    return Object.fromEntries(this.entities);
  }
}

export const SharedCryptoHeavy25_CONSTANTS = {
  MAX_DEPTH: 5,
  UNION_SIZE: 45,
  VERSION: '25.5.25',
} as const;