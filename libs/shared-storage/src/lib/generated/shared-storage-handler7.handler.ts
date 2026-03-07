export interface SharedStorageHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedStorageHandler7Handler {
  canHandle(event: SharedStorageHandler7Event): boolean;
  handle(event: SharedStorageHandler7Event): Promise<void>;
  priority: number;
}

export class SharedStorageHandler7EventBus {
  private handlers: SharedStorageHandler7Handler[] = [];
  private history: SharedStorageHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedStorageHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedStorageHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedStorageHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedStorageHandler7Handler(
  type: string,
  fn: (event: SharedStorageHandler7Event) => Promise<void>,
  priority = 0
): SharedStorageHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}