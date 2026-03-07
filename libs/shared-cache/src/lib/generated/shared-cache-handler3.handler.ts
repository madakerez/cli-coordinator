export interface SharedCacheHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCacheHandler3Handler {
  canHandle(event: SharedCacheHandler3Event): boolean;
  handle(event: SharedCacheHandler3Event): Promise<void>;
  priority: number;
}

export class SharedCacheHandler3EventBus {
  private handlers: SharedCacheHandler3Handler[] = [];
  private history: SharedCacheHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedCacheHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCacheHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCacheHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCacheHandler3Handler(
  type: string,
  fn: (event: SharedCacheHandler3Event) => Promise<void>,
  priority = 0
): SharedCacheHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}