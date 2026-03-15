export interface App4DataCacheHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4DataCacheHandler0Handler {
  canHandle(event: App4DataCacheHandler0Event): boolean;
  handle(event: App4DataCacheHandler0Event): Promise<void>;
  priority: number;
}

export class App4DataCacheHandler0EventBus {
  private handlers: App4DataCacheHandler0Handler[] = [];
  private history: App4DataCacheHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App4DataCacheHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4DataCacheHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4DataCacheHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4DataCacheHandler0Handler(
  type: string,
  fn: (event: App4DataCacheHandler0Event) => Promise<void>,
  priority = 0
): App4DataCacheHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}