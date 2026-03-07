export interface App4UiTablesHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiTablesHandler6Handler {
  canHandle(event: App4UiTablesHandler6Event): boolean;
  handle(event: App4UiTablesHandler6Event): Promise<void>;
  priority: number;
}

export class App4UiTablesHandler6EventBus {
  private handlers: App4UiTablesHandler6Handler[] = [];
  private history: App4UiTablesHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: App4UiTablesHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiTablesHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiTablesHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiTablesHandler6Handler(
  type: string,
  fn: (event: App4UiTablesHandler6Event) => Promise<void>,
  priority = 0
): App4UiTablesHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}