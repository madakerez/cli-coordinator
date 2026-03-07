export interface App4Handler10Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4Handler10Handler {
  canHandle(event: App4Handler10Event): boolean;
  handle(event: App4Handler10Event): Promise<void>;
  priority: number;
}

export class App4Handler10EventBus {
  private handlers: App4Handler10Handler[] = [];
  private history: App4Handler10Event[] = [];
  private maxHistory = 200;

  register(handler: App4Handler10Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4Handler10Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4Handler10Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4Handler10Handler(
  type: string,
  fn: (event: App4Handler10Event) => Promise<void>,
  priority = 0
): App4Handler10Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}