export interface SharedLoggingHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedLoggingHandler4Handler {
  canHandle(event: SharedLoggingHandler4Event): boolean;
  handle(event: SharedLoggingHandler4Event): Promise<void>;
  priority: number;
}

export class SharedLoggingHandler4EventBus {
  private handlers: SharedLoggingHandler4Handler[] = [];
  private history: SharedLoggingHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedLoggingHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedLoggingHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedLoggingHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedLoggingHandler4Handler(
  type: string,
  fn: (event: SharedLoggingHandler4Event) => Promise<void>,
  priority = 0
): SharedLoggingHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}