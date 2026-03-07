export interface App4Handler18Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4Handler18Handler {
  canHandle(event: App4Handler18Event): boolean;
  handle(event: App4Handler18Event): Promise<void>;
  priority: number;
}

export class App4Handler18EventBus {
  private handlers: App4Handler18Handler[] = [];
  private history: App4Handler18Event[] = [];
  private maxHistory = 280;

  register(handler: App4Handler18Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4Handler18Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4Handler18Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4Handler18Handler(
  type: string,
  fn: (event: App4Handler18Event) => Promise<void>,
  priority = 0
): App4Handler18Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}