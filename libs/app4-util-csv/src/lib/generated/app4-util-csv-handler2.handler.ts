export interface App4UtilCsvHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UtilCsvHandler2Handler {
  canHandle(event: App4UtilCsvHandler2Event): boolean;
  handle(event: App4UtilCsvHandler2Event): Promise<void>;
  priority: number;
}

export class App4UtilCsvHandler2EventBus {
  private handlers: App4UtilCsvHandler2Handler[] = [];
  private history: App4UtilCsvHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App4UtilCsvHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UtilCsvHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UtilCsvHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UtilCsvHandler2Handler(
  type: string,
  fn: (event: App4UtilCsvHandler2Event) => Promise<void>,
  priority = 0
): App4UtilCsvHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}