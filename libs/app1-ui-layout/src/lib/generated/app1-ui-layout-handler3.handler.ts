export interface App1UiLayoutHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1UiLayoutHandler3Handler {
  canHandle(event: App1UiLayoutHandler3Event): boolean;
  handle(event: App1UiLayoutHandler3Event): Promise<void>;
  priority: number;
}

export class App1UiLayoutHandler3EventBus {
  private handlers: App1UiLayoutHandler3Handler[] = [];
  private history: App1UiLayoutHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App1UiLayoutHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1UiLayoutHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1UiLayoutHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1UiLayoutHandler3Handler(
  type: string,
  fn: (event: App1UiLayoutHandler3Event) => Promise<void>,
  priority = 0
): App1UiLayoutHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}