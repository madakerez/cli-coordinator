export interface App4UiNavigationHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiNavigationHandler7Handler {
  canHandle(event: App4UiNavigationHandler7Event): boolean;
  handle(event: App4UiNavigationHandler7Event): Promise<void>;
  priority: number;
}

export class App4UiNavigationHandler7EventBus {
  private handlers: App4UiNavigationHandler7Handler[] = [];
  private history: App4UiNavigationHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: App4UiNavigationHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiNavigationHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiNavigationHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiNavigationHandler7Handler(
  type: string,
  fn: (event: App4UiNavigationHandler7Event) => Promise<void>,
  priority = 0
): App4UiNavigationHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}