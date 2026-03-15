export interface App4UiChartsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiChartsHandler5Handler {
  canHandle(event: App4UiChartsHandler5Event): boolean;
  handle(event: App4UiChartsHandler5Event): Promise<void>;
  priority: number;
}

export class App4UiChartsHandler5EventBus {
  private handlers: App4UiChartsHandler5Handler[] = [];
  private history: App4UiChartsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: App4UiChartsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiChartsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiChartsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiChartsHandler5Handler(
  type: string,
  fn: (event: App4UiChartsHandler5Event) => Promise<void>,
  priority = 0
): App4UiChartsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}