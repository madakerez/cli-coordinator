export interface SharedEventsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedEventsHandler0Handler {
  canHandle(event: SharedEventsHandler0Event): boolean;
  handle(event: SharedEventsHandler0Event): Promise<void>;
  priority: number;
}

export class SharedEventsHandler0EventBus {
  private handlers: SharedEventsHandler0Handler[] = [];
  private history: SharedEventsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedEventsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedEventsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedEventsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedEventsHandler0Handler(
  type: string,
  fn: (event: SharedEventsHandler0Event) => Promise<void>,
  priority = 0
): SharedEventsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}