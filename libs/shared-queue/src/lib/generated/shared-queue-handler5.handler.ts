export interface SharedQueueHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedQueueHandler5Handler {
  canHandle(event: SharedQueueHandler5Event): boolean;
  handle(event: SharedQueueHandler5Event): Promise<void>;
  priority: number;
}

export class SharedQueueHandler5EventBus {
  private handlers: SharedQueueHandler5Handler[] = [];
  private history: SharedQueueHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedQueueHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedQueueHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedQueueHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedQueueHandler5Handler(
  type: string,
  fn: (event: SharedQueueHandler5Event) => Promise<void>,
  priority = 0
): SharedQueueHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}