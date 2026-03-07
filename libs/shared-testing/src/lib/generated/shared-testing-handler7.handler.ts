export interface SharedTestingHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedTestingHandler7Handler {
  canHandle(event: SharedTestingHandler7Event): boolean;
  handle(event: SharedTestingHandler7Event): Promise<void>;
  priority: number;
}

export class SharedTestingHandler7EventBus {
  private handlers: SharedTestingHandler7Handler[] = [];
  private history: SharedTestingHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedTestingHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedTestingHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedTestingHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedTestingHandler7Handler(
  type: string,
  fn: (event: SharedTestingHandler7Event) => Promise<void>,
  priority = 0
): SharedTestingHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}