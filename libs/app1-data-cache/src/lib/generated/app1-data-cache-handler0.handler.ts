export interface App1DataCacheHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1DataCacheHandler0Handler {
  canHandle(event: App1DataCacheHandler0Event): boolean;
  handle(event: App1DataCacheHandler0Event): Promise<void>;
  priority: number;
}

export class App1DataCacheHandler0EventBus {
  private handlers: App1DataCacheHandler0Handler[] = [];
  private history: App1DataCacheHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App1DataCacheHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1DataCacheHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1DataCacheHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1DataCacheHandler0Handler(
  type: string,
  fn: (event: App1DataCacheHandler0Event) => Promise<void>,
  priority = 0
): App1DataCacheHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}