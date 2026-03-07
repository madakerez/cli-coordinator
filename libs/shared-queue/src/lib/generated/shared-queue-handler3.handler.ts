export interface SharedQueueHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedQueueHandler3Handler {
  canHandle(event: SharedQueueHandler3Event): boolean;
  handle(event: SharedQueueHandler3Event): Promise<void>;
  priority: number;
}

export class SharedQueueHandler3EventBus {
  private handlers: SharedQueueHandler3Handler[] = [];
  private history: SharedQueueHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedQueueHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedQueueHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedQueueHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedQueueHandler3Handler(
  type: string,
  fn: (event: SharedQueueHandler3Event) => Promise<void>,
  priority = 0
): SharedQueueHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}