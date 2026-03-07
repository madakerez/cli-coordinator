export interface SharedStorageHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedStorageHandler2Handler {
  canHandle(event: SharedStorageHandler2Event): boolean;
  handle(event: SharedStorageHandler2Event): Promise<void>;
  priority: number;
}

export class SharedStorageHandler2EventBus {
  private handlers: SharedStorageHandler2Handler[] = [];
  private history: SharedStorageHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedStorageHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedStorageHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedStorageHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedStorageHandler2Handler(
  type: string,
  fn: (event: SharedStorageHandler2Event) => Promise<void>,
  priority = 0
): SharedStorageHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}