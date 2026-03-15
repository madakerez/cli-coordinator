export interface SharedStorageHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedStorageHandler4Handler {
  canHandle(event: SharedStorageHandler4Event): boolean;
  handle(event: SharedStorageHandler4Event): Promise<void>;
  priority: number;
}

export class SharedStorageHandler4EventBus {
  private handlers: SharedStorageHandler4Handler[] = [];
  private history: SharedStorageHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedStorageHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedStorageHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedStorageHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedStorageHandler4Handler(
  type: string,
  fn: (event: SharedStorageHandler4Event) => Promise<void>,
  priority = 0
): SharedStorageHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}