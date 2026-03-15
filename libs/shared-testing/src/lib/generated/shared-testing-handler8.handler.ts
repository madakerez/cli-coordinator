export interface SharedTestingHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedTestingHandler8Handler {
  canHandle(event: SharedTestingHandler8Event): boolean;
  handle(event: SharedTestingHandler8Event): Promise<void>;
  priority: number;
}

export class SharedTestingHandler8EventBus {
  private handlers: SharedTestingHandler8Handler[] = [];
  private history: SharedTestingHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedTestingHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedTestingHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedTestingHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedTestingHandler8Handler(
  type: string,
  fn: (event: SharedTestingHandler8Event) => Promise<void>,
  priority = 0
): SharedTestingHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}