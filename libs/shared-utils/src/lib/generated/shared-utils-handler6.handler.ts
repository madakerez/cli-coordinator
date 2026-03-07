export interface SharedUtilsHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUtilsHandler6Handler {
  canHandle(event: SharedUtilsHandler6Event): boolean;
  handle(event: SharedUtilsHandler6Event): Promise<void>;
  priority: number;
}

export class SharedUtilsHandler6EventBus {
  private handlers: SharedUtilsHandler6Handler[] = [];
  private history: SharedUtilsHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedUtilsHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUtilsHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUtilsHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUtilsHandler6Handler(
  type: string,
  fn: (event: SharedUtilsHandler6Event) => Promise<void>,
  priority = 0
): SharedUtilsHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}