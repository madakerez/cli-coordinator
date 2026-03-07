export interface SharedAuthHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAuthHandler2Handler {
  canHandle(event: SharedAuthHandler2Event): boolean;
  handle(event: SharedAuthHandler2Event): Promise<void>;
  priority: number;
}

export class SharedAuthHandler2EventBus {
  private handlers: SharedAuthHandler2Handler[] = [];
  private history: SharedAuthHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedAuthHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAuthHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAuthHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAuthHandler2Handler(
  type: string,
  fn: (event: SharedAuthHandler2Event) => Promise<void>,
  priority = 0
): SharedAuthHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}