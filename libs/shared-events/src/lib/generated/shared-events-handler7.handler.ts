export interface SharedEventsHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedEventsHandler7Handler {
  canHandle(event: SharedEventsHandler7Event): boolean;
  handle(event: SharedEventsHandler7Event): Promise<void>;
  priority: number;
}

export class SharedEventsHandler7EventBus {
  private handlers: SharedEventsHandler7Handler[] = [];
  private history: SharedEventsHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedEventsHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedEventsHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedEventsHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedEventsHandler7Handler(
  type: string,
  fn: (event: SharedEventsHandler7Event) => Promise<void>,
  priority = 0
): SharedEventsHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}