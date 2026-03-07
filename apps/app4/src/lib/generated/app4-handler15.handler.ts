export interface App4Handler15Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4Handler15Handler {
  canHandle(event: App4Handler15Event): boolean;
  handle(event: App4Handler15Event): Promise<void>;
  priority: number;
}

export class App4Handler15EventBus {
  private handlers: App4Handler15Handler[] = [];
  private history: App4Handler15Event[] = [];
  private maxHistory = 250;

  register(handler: App4Handler15Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4Handler15Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4Handler15Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4Handler15Handler(
  type: string,
  fn: (event: App4Handler15Event) => Promise<void>,
  priority = 0
): App4Handler15Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}