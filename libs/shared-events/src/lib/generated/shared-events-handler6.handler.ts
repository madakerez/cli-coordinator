export interface SharedEventsHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedEventsHandler6Handler {
  canHandle(event: SharedEventsHandler6Event): boolean;
  handle(event: SharedEventsHandler6Event): Promise<void>;
  priority: number;
}

export class SharedEventsHandler6EventBus {
  private handlers: SharedEventsHandler6Handler[] = [];
  private history: SharedEventsHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedEventsHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedEventsHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedEventsHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedEventsHandler6Handler(
  type: string,
  fn: (event: SharedEventsHandler6Event) => Promise<void>,
  priority = 0
): SharedEventsHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}