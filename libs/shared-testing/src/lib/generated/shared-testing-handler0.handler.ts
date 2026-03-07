export interface SharedTestingHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedTestingHandler0Handler {
  canHandle(event: SharedTestingHandler0Event): boolean;
  handle(event: SharedTestingHandler0Event): Promise<void>;
  priority: number;
}

export class SharedTestingHandler0EventBus {
  private handlers: SharedTestingHandler0Handler[] = [];
  private history: SharedTestingHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedTestingHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedTestingHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedTestingHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedTestingHandler0Handler(
  type: string,
  fn: (event: SharedTestingHandler0Event) => Promise<void>,
  priority = 0
): SharedTestingHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}