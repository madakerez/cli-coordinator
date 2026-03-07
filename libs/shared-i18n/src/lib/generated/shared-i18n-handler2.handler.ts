export interface SharedI18nHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedI18nHandler2Handler {
  canHandle(event: SharedI18nHandler2Event): boolean;
  handle(event: SharedI18nHandler2Event): Promise<void>;
  priority: number;
}

export class SharedI18nHandler2EventBus {
  private handlers: SharedI18nHandler2Handler[] = [];
  private history: SharedI18nHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedI18nHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedI18nHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedI18nHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedI18nHandler2Handler(
  type: string,
  fn: (event: SharedI18nHandler2Event) => Promise<void>,
  priority = 0
): SharedI18nHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}