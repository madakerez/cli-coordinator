export interface SharedEventsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedEventsHandler3Handler {
  canHandle(event: SharedEventsHandler3Event): boolean;
  handle(event: SharedEventsHandler3Event): Promise<void>;
  priority: number;
}

export class SharedEventsHandler3EventBus {
  private handlers: SharedEventsHandler3Handler[] = [];
  private history: SharedEventsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedEventsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedEventsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedEventsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedEventsHandler3Handler(
  type: string,
  fn: (event: SharedEventsHandler3Event) => Promise<void>,
  priority = 0
): SharedEventsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}