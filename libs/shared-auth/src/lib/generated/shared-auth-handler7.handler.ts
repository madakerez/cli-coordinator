export interface SharedAuthHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAuthHandler7Handler {
  canHandle(event: SharedAuthHandler7Event): boolean;
  handle(event: SharedAuthHandler7Event): Promise<void>;
  priority: number;
}

export class SharedAuthHandler7EventBus {
  private handlers: SharedAuthHandler7Handler[] = [];
  private history: SharedAuthHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedAuthHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAuthHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAuthHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAuthHandler7Handler(
  type: string,
  fn: (event: SharedAuthHandler7Event) => Promise<void>,
  priority = 0
): SharedAuthHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}