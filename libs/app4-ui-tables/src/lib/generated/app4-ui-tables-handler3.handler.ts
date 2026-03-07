export interface App4UiTablesHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiTablesHandler3Handler {
  canHandle(event: App4UiTablesHandler3Event): boolean;
  handle(event: App4UiTablesHandler3Event): Promise<void>;
  priority: number;
}

export class App4UiTablesHandler3EventBus {
  private handlers: App4UiTablesHandler3Handler[] = [];
  private history: App4UiTablesHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App4UiTablesHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiTablesHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiTablesHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiTablesHandler3Handler(
  type: string,
  fn: (event: App4UiTablesHandler3Event) => Promise<void>,
  priority = 0
): App4UiTablesHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}