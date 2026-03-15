export interface SharedQueueHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedQueueHandler4Handler {
  canHandle(event: SharedQueueHandler4Event): boolean;
  handle(event: SharedQueueHandler4Event): Promise<void>;
  priority: number;
}

export class SharedQueueHandler4EventBus {
  private handlers: SharedQueueHandler4Handler[] = [];
  private history: SharedQueueHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedQueueHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedQueueHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedQueueHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedQueueHandler4Handler(
  type: string,
  fn: (event: SharedQueueHandler4Event) => Promise<void>,
  priority = 0
): SharedQueueHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}