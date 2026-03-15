export interface SharedEventsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedEventsHandler1Handler {
  canHandle(event: SharedEventsHandler1Event): boolean;
  handle(event: SharedEventsHandler1Event): Promise<void>;
  priority: number;
}

export class SharedEventsHandler1EventBus {
  private handlers: SharedEventsHandler1Handler[] = [];
  private history: SharedEventsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedEventsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedEventsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedEventsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedEventsHandler1Handler(
  type: string,
  fn: (event: SharedEventsHandler1Event) => Promise<void>,
  priority = 0
): SharedEventsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}