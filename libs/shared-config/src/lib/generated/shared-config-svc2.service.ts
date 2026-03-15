import type { ISharedConfigItem2, SharedConfigItem2Status } from './shared-config-item2.model';
import type { ISharedConfigItem3, SharedConfigItem3Status } from './shared-config-item3.model';
import type { ISharedConfigItem4, SharedConfigItem4Status } from './shared-config-item4.model';

export interface SharedConfigSvc2ServiceConfig {
  baseUrl: string;
  apiKey: string;
  timeout: number;
  retryAttempts: number;
}

export interface SharedConfigSvc2CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
  key: string;
}

export class SharedConfigSvc2Service {
  cache = new Map<string, SharedConfigSvc2CacheEntry<unknown>>();
  requestQueue: Array<() => Promise<void>> = [];
  processing = false;
  config: SharedConfigSvc2ServiceConfig;

  constructor(config: SharedConfigSvc2ServiceConfig) {
    this.config = config;
  }

  getCacheKey(method: string, params: Record<string, unknown>): string {
    return `${this.config.baseUrl}/${method}:${JSON.stringify(params)}`;
  }

  getCached<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }
    return entry.data as T;
  }

  setCache<T>(key: string, data: T, ttl = 60000): void {
    this.cache.set(key, { data, timestamp: Date.now(), ttl, key });
    if (this.cache.size > 1000) {
      const oldest = [...this.cache.entries()].sort((a, b) => a[1].timestamp - b[1].timestamp);
      for (let i = 0; i < 100; i++) this.cache.delete(oldest[i][0]);
    }
  }

  async processQueue(): Promise<void> {
    if (this.processing) return;
    this.processing = true;
    while (this.requestQueue.length > 0) {
      const task = this.requestQueue.shift();
      if (task) await task();
    }
    this.processing = false;
  }

  clearCache(): void {
    this.cache.clear();
  }

  getCacheStats(): { size: number; hitRate: number } {
    return { size: this.cache.size, hitRate: 0 };
  }

  async healthCheck(): Promise<{ status: string; latency: number }> {
    const start = Date.now();
    return { status: this.config.baseUrl, latency: Date.now() - start };
  }
}