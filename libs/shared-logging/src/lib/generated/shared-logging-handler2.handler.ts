export interface SharedLoggingHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedLoggingHandler2Handler {
  canHandle(event: SharedLoggingHandler2Event): boolean;
  handle(event: SharedLoggingHandler2Event): Promise<void>;
  priority: number;
}

export class SharedLoggingHandler2EventBus {
  private handlers: SharedLoggingHandler2Handler[] = [];
  private history: SharedLoggingHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedLoggingHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedLoggingHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedLoggingHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedLoggingHandler2Handler(
  type: string,
  fn: (event: SharedLoggingHandler2Event) => Promise<void>,
  priority = 0
): SharedLoggingHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}