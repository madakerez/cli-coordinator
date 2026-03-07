export interface SharedUtilsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUtilsHandler0Handler {
  canHandle(event: SharedUtilsHandler0Event): boolean;
  handle(event: SharedUtilsHandler0Event): Promise<void>;
  priority: number;
}

export class SharedUtilsHandler0EventBus {
  private handlers: SharedUtilsHandler0Handler[] = [];
  private history: SharedUtilsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedUtilsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUtilsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUtilsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUtilsHandler0Handler(
  type: string,
  fn: (event: SharedUtilsHandler0Event) => Promise<void>,
  priority = 0
): SharedUtilsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}