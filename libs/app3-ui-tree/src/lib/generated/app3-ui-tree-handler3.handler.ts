export interface App3UiTreeHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3UiTreeHandler3Handler {
  canHandle(event: App3UiTreeHandler3Event): boolean;
  handle(event: App3UiTreeHandler3Event): Promise<void>;
  priority: number;
}

export class App3UiTreeHandler3EventBus {
  private handlers: App3UiTreeHandler3Handler[] = [];
  private history: App3UiTreeHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App3UiTreeHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3UiTreeHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3UiTreeHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3UiTreeHandler3Handler(
  type: string,
  fn: (event: App3UiTreeHandler3Event) => Promise<void>,
  priority = 0
): App3UiTreeHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}