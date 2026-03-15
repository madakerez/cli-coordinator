export interface SharedUtilsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUtilsHandler2Handler {
  canHandle(event: SharedUtilsHandler2Event): boolean;
  handle(event: SharedUtilsHandler2Event): Promise<void>;
  priority: number;
}

export class SharedUtilsHandler2EventBus {
  private handlers: SharedUtilsHandler2Handler[] = [];
  private history: SharedUtilsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedUtilsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUtilsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUtilsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUtilsHandler2Handler(
  type: string,
  fn: (event: SharedUtilsHandler2Event) => Promise<void>,
  priority = 0
): SharedUtilsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}