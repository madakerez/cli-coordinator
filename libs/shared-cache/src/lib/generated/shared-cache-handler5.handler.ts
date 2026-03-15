export interface SharedCacheHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCacheHandler5Handler {
  canHandle(event: SharedCacheHandler5Event): boolean;
  handle(event: SharedCacheHandler5Event): Promise<void>;
  priority: number;
}

export class SharedCacheHandler5EventBus {
  private handlers: SharedCacheHandler5Handler[] = [];
  private history: SharedCacheHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedCacheHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCacheHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCacheHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCacheHandler5Handler(
  type: string,
  fn: (event: SharedCacheHandler5Event) => Promise<void>,
  priority = 0
): SharedCacheHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}