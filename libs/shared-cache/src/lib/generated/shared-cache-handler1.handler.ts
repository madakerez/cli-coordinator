export interface SharedCacheHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCacheHandler1Handler {
  canHandle(event: SharedCacheHandler1Event): boolean;
  handle(event: SharedCacheHandler1Event): Promise<void>;
  priority: number;
}

export class SharedCacheHandler1EventBus {
  private handlers: SharedCacheHandler1Handler[] = [];
  private history: SharedCacheHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedCacheHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCacheHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCacheHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCacheHandler1Handler(
  type: string,
  fn: (event: SharedCacheHandler1Event) => Promise<void>,
  priority = 0
): SharedCacheHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}