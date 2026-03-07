export interface SharedUtilsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUtilsHandler3Handler {
  canHandle(event: SharedUtilsHandler3Event): boolean;
  handle(event: SharedUtilsHandler3Event): Promise<void>;
  priority: number;
}

export class SharedUtilsHandler3EventBus {
  private handlers: SharedUtilsHandler3Handler[] = [];
  private history: SharedUtilsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedUtilsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUtilsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUtilsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUtilsHandler3Handler(
  type: string,
  fn: (event: SharedUtilsHandler3Event) => Promise<void>,
  priority = 0
): SharedUtilsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}