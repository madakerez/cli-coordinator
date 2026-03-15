export interface App4UiModalsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UiModalsHandler3Handler {
  canHandle(event: App4UiModalsHandler3Event): boolean;
  handle(event: App4UiModalsHandler3Event): Promise<void>;
  priority: number;
}

export class App4UiModalsHandler3EventBus {
  private handlers: App4UiModalsHandler3Handler[] = [];
  private history: App4UiModalsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App4UiModalsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UiModalsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UiModalsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UiModalsHandler3Handler(
  type: string,
  fn: (event: App4UiModalsHandler3Event) => Promise<void>,
  priority = 0
): App4UiModalsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}