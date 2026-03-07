export interface SharedQueueHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedQueueHandler1Handler {
  canHandle(event: SharedQueueHandler1Event): boolean;
  handle(event: SharedQueueHandler1Event): Promise<void>;
  priority: number;
}

export class SharedQueueHandler1EventBus {
  private handlers: SharedQueueHandler1Handler[] = [];
  private history: SharedQueueHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedQueueHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedQueueHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedQueueHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedQueueHandler1Handler(
  type: string,
  fn: (event: SharedQueueHandler1Event) => Promise<void>,
  priority = 0
): SharedQueueHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}