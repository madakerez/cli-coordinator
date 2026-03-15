export interface SharedTestingHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedTestingHandler5Handler {
  canHandle(event: SharedTestingHandler5Event): boolean;
  handle(event: SharedTestingHandler5Event): Promise<void>;
  priority: number;
}

export class SharedTestingHandler5EventBus {
  private handlers: SharedTestingHandler5Handler[] = [];
  private history: SharedTestingHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedTestingHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedTestingHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedTestingHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedTestingHandler5Handler(
  type: string,
  fn: (event: SharedTestingHandler5Event) => Promise<void>,
  priority = 0
): SharedTestingHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}