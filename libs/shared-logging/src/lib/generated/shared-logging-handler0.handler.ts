export interface SharedLoggingHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedLoggingHandler0Handler {
  canHandle(event: SharedLoggingHandler0Event): boolean;
  handle(event: SharedLoggingHandler0Event): Promise<void>;
  priority: number;
}

export class SharedLoggingHandler0EventBus {
  private handlers: SharedLoggingHandler0Handler[] = [];
  private history: SharedLoggingHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedLoggingHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedLoggingHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedLoggingHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedLoggingHandler0Handler(
  type: string,
  fn: (event: SharedLoggingHandler0Event) => Promise<void>,
  priority = 0
): SharedLoggingHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}