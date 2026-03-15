export interface SharedLoggingHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedLoggingHandler5Handler {
  canHandle(event: SharedLoggingHandler5Event): boolean;
  handle(event: SharedLoggingHandler5Event): Promise<void>;
  priority: number;
}

export class SharedLoggingHandler5EventBus {
  private handlers: SharedLoggingHandler5Handler[] = [];
  private history: SharedLoggingHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedLoggingHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedLoggingHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedLoggingHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedLoggingHandler5Handler(
  type: string,
  fn: (event: SharedLoggingHandler5Event) => Promise<void>,
  priority = 0
): SharedLoggingHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}