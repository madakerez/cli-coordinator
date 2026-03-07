export interface App4Handler22Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4Handler22Handler {
  canHandle(event: App4Handler22Event): boolean;
  handle(event: App4Handler22Event): Promise<void>;
  priority: number;
}

export class App4Handler22EventBus {
  private handlers: App4Handler22Handler[] = [];
  private history: App4Handler22Event[] = [];
  private maxHistory = 320;

  register(handler: App4Handler22Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4Handler22Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4Handler22Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4Handler22Handler(
  type: string,
  fn: (event: App4Handler22Event) => Promise<void>,
  priority = 0
): App4Handler22Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}