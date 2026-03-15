export interface SharedTestingHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedTestingHandler4Handler {
  canHandle(event: SharedTestingHandler4Event): boolean;
  handle(event: SharedTestingHandler4Event): Promise<void>;
  priority: number;
}

export class SharedTestingHandler4EventBus {
  private handlers: SharedTestingHandler4Handler[] = [];
  private history: SharedTestingHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedTestingHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedTestingHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedTestingHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedTestingHandler4Handler(
  type: string,
  fn: (event: SharedTestingHandler4Event) => Promise<void>,
  priority = 0
): SharedTestingHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}