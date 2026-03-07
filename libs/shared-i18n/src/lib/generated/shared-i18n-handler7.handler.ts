export interface SharedI18nHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedI18nHandler7Handler {
  canHandle(event: SharedI18nHandler7Event): boolean;
  handle(event: SharedI18nHandler7Event): Promise<void>;
  priority: number;
}

export class SharedI18nHandler7EventBus {
  private handlers: SharedI18nHandler7Handler[] = [];
  private history: SharedI18nHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedI18nHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedI18nHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedI18nHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedI18nHandler7Handler(
  type: string,
  fn: (event: SharedI18nHandler7Event) => Promise<void>,
  priority = 0
): SharedI18nHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}