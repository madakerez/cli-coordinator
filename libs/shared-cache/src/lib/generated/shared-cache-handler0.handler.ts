export interface SharedCacheHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCacheHandler0Handler {
  canHandle(event: SharedCacheHandler0Event): boolean;
  handle(event: SharedCacheHandler0Event): Promise<void>;
  priority: number;
}

export class SharedCacheHandler0EventBus {
  private handlers: SharedCacheHandler0Handler[] = [];
  private history: SharedCacheHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedCacheHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCacheHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCacheHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCacheHandler0Handler(
  type: string,
  fn: (event: SharedCacheHandler0Event) => Promise<void>,
  priority = 0
): SharedCacheHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}