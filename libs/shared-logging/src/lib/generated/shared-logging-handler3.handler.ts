export interface SharedLoggingHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedLoggingHandler3Handler {
  canHandle(event: SharedLoggingHandler3Event): boolean;
  handle(event: SharedLoggingHandler3Event): Promise<void>;
  priority: number;
}

export class SharedLoggingHandler3EventBus {
  private handlers: SharedLoggingHandler3Handler[] = [];
  private history: SharedLoggingHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedLoggingHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedLoggingHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedLoggingHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedLoggingHandler3Handler(
  type: string,
  fn: (event: SharedLoggingHandler3Event) => Promise<void>,
  priority = 0
): SharedLoggingHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}