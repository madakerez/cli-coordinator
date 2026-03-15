export interface SharedI18nHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedI18nHandler3Handler {
  canHandle(event: SharedI18nHandler3Event): boolean;
  handle(event: SharedI18nHandler3Event): Promise<void>;
  priority: number;
}

export class SharedI18nHandler3EventBus {
  private handlers: SharedI18nHandler3Handler[] = [];
  private history: SharedI18nHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedI18nHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedI18nHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedI18nHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedI18nHandler3Handler(
  type: string,
  fn: (event: SharedI18nHandler3Event) => Promise<void>,
  priority = 0
): SharedI18nHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}