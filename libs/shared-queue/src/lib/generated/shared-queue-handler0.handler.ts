export interface SharedQueueHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedQueueHandler0Handler {
  canHandle(event: SharedQueueHandler0Event): boolean;
  handle(event: SharedQueueHandler0Event): Promise<void>;
  priority: number;
}

export class SharedQueueHandler0EventBus {
  private handlers: SharedQueueHandler0Handler[] = [];
  private history: SharedQueueHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedQueueHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedQueueHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedQueueHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedQueueHandler0Handler(
  type: string,
  fn: (event: SharedQueueHandler0Event) => Promise<void>,
  priority = 0
): SharedQueueHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}