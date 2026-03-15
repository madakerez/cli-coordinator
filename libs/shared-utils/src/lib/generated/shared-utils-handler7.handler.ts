export interface SharedUtilsHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUtilsHandler7Handler {
  canHandle(event: SharedUtilsHandler7Event): boolean;
  handle(event: SharedUtilsHandler7Event): Promise<void>;
  priority: number;
}

export class SharedUtilsHandler7EventBus {
  private handlers: SharedUtilsHandler7Handler[] = [];
  private history: SharedUtilsHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedUtilsHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUtilsHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUtilsHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUtilsHandler7Handler(
  type: string,
  fn: (event: SharedUtilsHandler7Event) => Promise<void>,
  priority = 0
): SharedUtilsHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}