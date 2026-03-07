export interface SharedTestingHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedTestingHandler1Handler {
  canHandle(event: SharedTestingHandler1Event): boolean;
  handle(event: SharedTestingHandler1Event): Promise<void>;
  priority: number;
}

export class SharedTestingHandler1EventBus {
  private handlers: SharedTestingHandler1Handler[] = [];
  private history: SharedTestingHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedTestingHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedTestingHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedTestingHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedTestingHandler1Handler(
  type: string,
  fn: (event: SharedTestingHandler1Event) => Promise<void>,
  priority = 0
): SharedTestingHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}