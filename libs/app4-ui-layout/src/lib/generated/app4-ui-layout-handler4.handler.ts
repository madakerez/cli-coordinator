export interface App4UiLayoutHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiLayoutHandler4Handler {
  canHandle(event: App4UiLayoutHandler4Event): boolean;
  handle(event: App4UiLayoutHandler4Event): Promise<void>;
  priority: number;
}

export class App4UiLayoutHandler4EventBus {
  private handlers: App4UiLayoutHandler4Handler[] = [];
  private history: App4UiLayoutHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: App4UiLayoutHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiLayoutHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiLayoutHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiLayoutHandler4Handler(
  type: string,
  fn: (event: App4UiLayoutHandler4Event) => Promise<void>,
  priority = 0
): App4UiLayoutHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}