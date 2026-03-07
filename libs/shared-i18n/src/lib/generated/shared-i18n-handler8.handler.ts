export interface SharedI18nHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedI18nHandler8Handler {
  canHandle(event: SharedI18nHandler8Event): boolean;
  handle(event: SharedI18nHandler8Event): Promise<void>;
  priority: number;
}

export class SharedI18nHandler8EventBus {
  private handlers: SharedI18nHandler8Handler[] = [];
  private history: SharedI18nHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedI18nHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedI18nHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedI18nHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedI18nHandler8Handler(
  type: string,
  fn: (event: SharedI18nHandler8Event) => Promise<void>,
  priority = 0
): SharedI18nHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}