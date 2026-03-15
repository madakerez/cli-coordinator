export interface SharedEventsHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedEventsHandler4Handler {
  canHandle(event: SharedEventsHandler4Event): boolean;
  handle(event: SharedEventsHandler4Event): Promise<void>;
  priority: number;
}

export class SharedEventsHandler4EventBus {
  private handlers: SharedEventsHandler4Handler[] = [];
  private history: SharedEventsHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedEventsHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedEventsHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedEventsHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedEventsHandler4Handler(
  type: string,
  fn: (event: SharedEventsHandler4Event) => Promise<void>,
  priority = 0
): SharedEventsHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}