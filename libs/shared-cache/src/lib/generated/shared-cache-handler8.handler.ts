export interface SharedCacheHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCacheHandler8Handler {
  canHandle(event: SharedCacheHandler8Event): boolean;
  handle(event: SharedCacheHandler8Event): Promise<void>;
  priority: number;
}

export class SharedCacheHandler8EventBus {
  private handlers: SharedCacheHandler8Handler[] = [];
  private history: SharedCacheHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedCacheHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCacheHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCacheHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCacheHandler8Handler(
  type: string,
  fn: (event: SharedCacheHandler8Event) => Promise<void>,
  priority = 0
): SharedCacheHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}