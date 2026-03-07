export interface SharedEventsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedEventsHandler5Handler {
  canHandle(event: SharedEventsHandler5Event): boolean;
  handle(event: SharedEventsHandler5Event): Promise<void>;
  priority: number;
}

export class SharedEventsHandler5EventBus {
  private handlers: SharedEventsHandler5Handler[] = [];
  private history: SharedEventsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedEventsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedEventsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedEventsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedEventsHandler5Handler(
  type: string,
  fn: (event: SharedEventsHandler5Event) => Promise<void>,
  priority = 0
): SharedEventsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}