export interface SharedStorageHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedStorageHandler8Handler {
  canHandle(event: SharedStorageHandler8Event): boolean;
  handle(event: SharedStorageHandler8Event): Promise<void>;
  priority: number;
}

export class SharedStorageHandler8EventBus {
  private handlers: SharedStorageHandler8Handler[] = [];
  private history: SharedStorageHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedStorageHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedStorageHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedStorageHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedStorageHandler8Handler(
  type: string,
  fn: (event: SharedStorageHandler8Event) => Promise<void>,
  priority = 0
): SharedStorageHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}