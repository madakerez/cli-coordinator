export interface SharedLoggingHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedLoggingHandler1Handler {
  canHandle(event: SharedLoggingHandler1Event): boolean;
  handle(event: SharedLoggingHandler1Event): Promise<void>;
  priority: number;
}

export class SharedLoggingHandler1EventBus {
  private handlers: SharedLoggingHandler1Handler[] = [];
  private history: SharedLoggingHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedLoggingHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedLoggingHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedLoggingHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedLoggingHandler1Handler(
  type: string,
  fn: (event: SharedLoggingHandler1Event) => Promise<void>,
  priority = 0
): SharedLoggingHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}