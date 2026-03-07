export interface SharedEventsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedEventsHandler2Handler {
  canHandle(event: SharedEventsHandler2Event): boolean;
  handle(event: SharedEventsHandler2Event): Promise<void>;
  priority: number;
}

export class SharedEventsHandler2EventBus {
  private handlers: SharedEventsHandler2Handler[] = [];
  private history: SharedEventsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedEventsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedEventsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedEventsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedEventsHandler2Handler(
  type: string,
  fn: (event: SharedEventsHandler2Event) => Promise<void>,
  priority = 0
): SharedEventsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}