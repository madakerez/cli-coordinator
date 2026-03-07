export interface SharedTestingHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedTestingHandler2Handler {
  canHandle(event: SharedTestingHandler2Event): boolean;
  handle(event: SharedTestingHandler2Event): Promise<void>;
  priority: number;
}

export class SharedTestingHandler2EventBus {
  private handlers: SharedTestingHandler2Handler[] = [];
  private history: SharedTestingHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedTestingHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedTestingHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedTestingHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedTestingHandler2Handler(
  type: string,
  fn: (event: SharedTestingHandler2Event) => Promise<void>,
  priority = 0
): SharedTestingHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}