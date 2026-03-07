export interface SharedAuthHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAuthHandler3Handler {
  canHandle(event: SharedAuthHandler3Event): boolean;
  handle(event: SharedAuthHandler3Event): Promise<void>;
  priority: number;
}

export class SharedAuthHandler3EventBus {
  private handlers: SharedAuthHandler3Handler[] = [];
  private history: SharedAuthHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedAuthHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAuthHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAuthHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAuthHandler3Handler(
  type: string,
  fn: (event: SharedAuthHandler3Event) => Promise<void>,
  priority = 0
): SharedAuthHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}