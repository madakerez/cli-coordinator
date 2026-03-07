export interface SharedStorageHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedStorageHandler5Handler {
  canHandle(event: SharedStorageHandler5Event): boolean;
  handle(event: SharedStorageHandler5Event): Promise<void>;
  priority: number;
}

export class SharedStorageHandler5EventBus {
  private handlers: SharedStorageHandler5Handler[] = [];
  private history: SharedStorageHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedStorageHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedStorageHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedStorageHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedStorageHandler5Handler(
  type: string,
  fn: (event: SharedStorageHandler5Event) => Promise<void>,
  priority = 0
): SharedStorageHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}