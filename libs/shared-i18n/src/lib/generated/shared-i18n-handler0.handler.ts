export interface SharedI18nHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedI18nHandler0Handler {
  canHandle(event: SharedI18nHandler0Event): boolean;
  handle(event: SharedI18nHandler0Event): Promise<void>;
  priority: number;
}

export class SharedI18nHandler0EventBus {
  private handlers: SharedI18nHandler0Handler[] = [];
  private history: SharedI18nHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedI18nHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedI18nHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedI18nHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedI18nHandler0Handler(
  type: string,
  fn: (event: SharedI18nHandler0Event) => Promise<void>,
  priority = 0
): SharedI18nHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}