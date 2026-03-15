export interface App2UiChartsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2UiChartsHandler0Handler {
  canHandle(event: App2UiChartsHandler0Event): boolean;
  handle(event: App2UiChartsHandler0Event): Promise<void>;
  priority: number;
}

export class App2UiChartsHandler0EventBus {
  private handlers: App2UiChartsHandler0Handler[] = [];
  private history: App2UiChartsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App2UiChartsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2UiChartsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2UiChartsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2UiChartsHandler0Handler(
  type: string,
  fn: (event: App2UiChartsHandler0Event) => Promise<void>,
  priority = 0
): App2UiChartsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}