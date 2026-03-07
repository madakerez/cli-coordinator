export interface SharedCacheHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCacheHandler7Handler {
  canHandle(event: SharedCacheHandler7Event): boolean;
  handle(event: SharedCacheHandler7Event): Promise<void>;
  priority: number;
}

export class SharedCacheHandler7EventBus {
  private handlers: SharedCacheHandler7Handler[] = [];
  private history: SharedCacheHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedCacheHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCacheHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCacheHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCacheHandler7Handler(
  type: string,
  fn: (event: SharedCacheHandler7Event) => Promise<void>,
  priority = 0
): SharedCacheHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}