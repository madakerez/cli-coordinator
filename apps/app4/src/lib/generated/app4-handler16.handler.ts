export interface App4Handler16Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4Handler16Handler {
  canHandle(event: App4Handler16Event): boolean;
  handle(event: App4Handler16Event): Promise<void>;
  priority: number;
}

export class App4Handler16EventBus {
  private handlers: App4Handler16Handler[] = [];
  private history: App4Handler16Event[] = [];
  private maxHistory = 260;

  register(handler: App4Handler16Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4Handler16Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4Handler16Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4Handler16Handler(
  type: string,
  fn: (event: App4Handler16Event) => Promise<void>,
  priority = 0
): App4Handler16Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}