export interface SharedTestingHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedTestingHandler6Handler {
  canHandle(event: SharedTestingHandler6Event): boolean;
  handle(event: SharedTestingHandler6Event): Promise<void>;
  priority: number;
}

export class SharedTestingHandler6EventBus {
  private handlers: SharedTestingHandler6Handler[] = [];
  private history: SharedTestingHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedTestingHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedTestingHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedTestingHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedTestingHandler6Handler(
  type: string,
  fn: (event: SharedTestingHandler6Event) => Promise<void>,
  priority = 0
): SharedTestingHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}