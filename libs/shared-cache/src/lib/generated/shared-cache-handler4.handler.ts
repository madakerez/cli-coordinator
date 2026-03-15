export interface SharedCacheHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCacheHandler4Handler {
  canHandle(event: SharedCacheHandler4Event): boolean;
  handle(event: SharedCacheHandler4Event): Promise<void>;
  priority: number;
}

export class SharedCacheHandler4EventBus {
  private handlers: SharedCacheHandler4Handler[] = [];
  private history: SharedCacheHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedCacheHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCacheHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCacheHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCacheHandler4Handler(
  type: string,
  fn: (event: SharedCacheHandler4Event) => Promise<void>,
  priority = 0
): SharedCacheHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}