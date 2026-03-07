export interface App4UiNavigationHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiNavigationHandler6Handler {
  canHandle(event: App4UiNavigationHandler6Event): boolean;
  handle(event: App4UiNavigationHandler6Event): Promise<void>;
  priority: number;
}

export class App4UiNavigationHandler6EventBus {
  private handlers: App4UiNavigationHandler6Handler[] = [];
  private history: App4UiNavigationHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: App4UiNavigationHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiNavigationHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiNavigationHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiNavigationHandler6Handler(
  type: string,
  fn: (event: App4UiNavigationHandler6Event) => Promise<void>,
  priority = 0
): App4UiNavigationHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}