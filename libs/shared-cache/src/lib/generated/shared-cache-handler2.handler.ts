export interface SharedCacheHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCacheHandler2Handler {
  canHandle(event: SharedCacheHandler2Event): boolean;
  handle(event: SharedCacheHandler2Event): Promise<void>;
  priority: number;
}

export class SharedCacheHandler2EventBus {
  private handlers: SharedCacheHandler2Handler[] = [];
  private history: SharedCacheHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedCacheHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCacheHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCacheHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCacheHandler2Handler(
  type: string,
  fn: (event: SharedCacheHandler2Event) => Promise<void>,
  priority = 0
): SharedCacheHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}