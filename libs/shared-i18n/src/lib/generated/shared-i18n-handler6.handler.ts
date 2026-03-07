export interface SharedI18nHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedI18nHandler6Handler {
  canHandle(event: SharedI18nHandler6Event): boolean;
  handle(event: SharedI18nHandler6Event): Promise<void>;
  priority: number;
}

export class SharedI18nHandler6EventBus {
  private handlers: SharedI18nHandler6Handler[] = [];
  private history: SharedI18nHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedI18nHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedI18nHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedI18nHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedI18nHandler6Handler(
  type: string,
  fn: (event: SharedI18nHandler6Event) => Promise<void>,
  priority = 0
): SharedI18nHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}