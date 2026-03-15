export interface SharedStorageHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedStorageHandler1Handler {
  canHandle(event: SharedStorageHandler1Event): boolean;
  handle(event: SharedStorageHandler1Event): Promise<void>;
  priority: number;
}

export class SharedStorageHandler1EventBus {
  private handlers: SharedStorageHandler1Handler[] = [];
  private history: SharedStorageHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedStorageHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedStorageHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedStorageHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedStorageHandler1Handler(
  type: string,
  fn: (event: SharedStorageHandler1Event) => Promise<void>,
  priority = 0
): SharedStorageHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}