export interface SharedStorageHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedStorageHandler0Handler {
  canHandle(event: SharedStorageHandler0Event): boolean;
  handle(event: SharedStorageHandler0Event): Promise<void>;
  priority: number;
}

export class SharedStorageHandler0EventBus {
  private handlers: SharedStorageHandler0Handler[] = [];
  private history: SharedStorageHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedStorageHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedStorageHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedStorageHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedStorageHandler0Handler(
  type: string,
  fn: (event: SharedStorageHandler0Event) => Promise<void>,
  priority = 0
): SharedStorageHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}