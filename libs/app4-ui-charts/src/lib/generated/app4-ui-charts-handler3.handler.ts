export interface App4UiChartsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiChartsHandler3Handler {
  canHandle(event: App4UiChartsHandler3Event): boolean;
  handle(event: App4UiChartsHandler3Event): Promise<void>;
  priority: number;
}

export class App4UiChartsHandler3EventBus {
  private handlers: App4UiChartsHandler3Handler[] = [];
  private history: App4UiChartsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App4UiChartsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiChartsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiChartsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiChartsHandler3Handler(
  type: string,
  fn: (event: App4UiChartsHandler3Event) => Promise<void>,
  priority = 0
): App4UiChartsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}