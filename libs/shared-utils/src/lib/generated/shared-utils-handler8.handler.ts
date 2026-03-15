export interface SharedUtilsHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUtilsHandler8Handler {
  canHandle(event: SharedUtilsHandler8Event): boolean;
  handle(event: SharedUtilsHandler8Event): Promise<void>;
  priority: number;
}

export class SharedUtilsHandler8EventBus {
  private handlers: SharedUtilsHandler8Handler[] = [];
  private history: SharedUtilsHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedUtilsHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUtilsHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUtilsHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUtilsHandler8Handler(
  type: string,
  fn: (event: SharedUtilsHandler8Event) => Promise<void>,
  priority = 0
): SharedUtilsHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}