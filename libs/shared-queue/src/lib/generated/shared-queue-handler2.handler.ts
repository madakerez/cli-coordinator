export interface SharedQueueHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedQueueHandler2Handler {
  canHandle(event: SharedQueueHandler2Event): boolean;
  handle(event: SharedQueueHandler2Event): Promise<void>;
  priority: number;
}

export class SharedQueueHandler2EventBus {
  private handlers: SharedQueueHandler2Handler[] = [];
  private history: SharedQueueHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedQueueHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedQueueHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedQueueHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedQueueHandler2Handler(
  type: string,
  fn: (event: SharedQueueHandler2Event) => Promise<void>,
  priority = 0
): SharedQueueHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}