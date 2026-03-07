export interface App4UtilParsersHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UtilParsersHandler2Handler {
  canHandle(event: App4UtilParsersHandler2Event): boolean;
  handle(event: App4UtilParsersHandler2Event): Promise<void>;
  priority: number;
}

export class App4UtilParsersHandler2EventBus {
  private handlers: App4UtilParsersHandler2Handler[] = [];
  private history: App4UtilParsersHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App4UtilParsersHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UtilParsersHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UtilParsersHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UtilParsersHandler2Handler(
  type: string,
  fn: (event: App4UtilParsersHandler2Event) => Promise<void>,
  priority = 0
): App4UtilParsersHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}