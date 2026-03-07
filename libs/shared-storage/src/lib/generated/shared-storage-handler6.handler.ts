export interface SharedStorageHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedStorageHandler6Handler {
  canHandle(event: SharedStorageHandler6Event): boolean;
  handle(event: SharedStorageHandler6Event): Promise<void>;
  priority: number;
}

export class SharedStorageHandler6EventBus {
  private handlers: SharedStorageHandler6Handler[] = [];
  private history: SharedStorageHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedStorageHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedStorageHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedStorageHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedStorageHandler6Handler(
  type: string,
  fn: (event: SharedStorageHandler6Event) => Promise<void>,
  priority = 0
): SharedStorageHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}