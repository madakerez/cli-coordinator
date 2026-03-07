export interface SharedStorageHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedStorageHandler3Handler {
  canHandle(event: SharedStorageHandler3Event): boolean;
  handle(event: SharedStorageHandler3Event): Promise<void>;
  priority: number;
}

export class SharedStorageHandler3EventBus {
  private handlers: SharedStorageHandler3Handler[] = [];
  private history: SharedStorageHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedStorageHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedStorageHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedStorageHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedStorageHandler3Handler(
  type: string,
  fn: (event: SharedStorageHandler3Event) => Promise<void>,
  priority = 0
): SharedStorageHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}