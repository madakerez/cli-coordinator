export interface App1DataCacheHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1DataCacheHandler2Handler {
  canHandle(event: App1DataCacheHandler2Event): boolean;
  handle(event: App1DataCacheHandler2Event): Promise<void>;
  priority: number;
}

export class App1DataCacheHandler2EventBus {
  private handlers: App1DataCacheHandler2Handler[] = [];
  private history: App1DataCacheHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App1DataCacheHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1DataCacheHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1DataCacheHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1DataCacheHandler2Handler(
  type: string,
  fn: (event: App1DataCacheHandler2Event) => Promise<void>,
  priority = 0
): App1DataCacheHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}