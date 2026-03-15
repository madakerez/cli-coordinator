export interface App4UiComponentsHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiComponentsHandler7Handler {
  canHandle(event: App4UiComponentsHandler7Event): boolean;
  handle(event: App4UiComponentsHandler7Event): Promise<void>;
  priority: number;
}

export class App4UiComponentsHandler7EventBus {
  private handlers: App4UiComponentsHandler7Handler[] = [];
  private history: App4UiComponentsHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: App4UiComponentsHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiComponentsHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiComponentsHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiComponentsHandler7Handler(
  type: string,
  fn: (event: App4UiComponentsHandler7Event) => Promise<void>,
  priority = 0
): App4UiComponentsHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}