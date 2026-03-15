export interface SharedQueueHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedQueueHandler7Handler {
  canHandle(event: SharedQueueHandler7Event): boolean;
  handle(event: SharedQueueHandler7Event): Promise<void>;
  priority: number;
}

export class SharedQueueHandler7EventBus {
  private handlers: SharedQueueHandler7Handler[] = [];
  private history: SharedQueueHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedQueueHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedQueueHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedQueueHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedQueueHandler7Handler(
  type: string,
  fn: (event: SharedQueueHandler7Event) => Promise<void>,
  priority = 0
): SharedQueueHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}