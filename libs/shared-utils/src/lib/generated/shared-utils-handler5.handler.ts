export interface SharedUtilsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUtilsHandler5Handler {
  canHandle(event: SharedUtilsHandler5Event): boolean;
  handle(event: SharedUtilsHandler5Event): Promise<void>;
  priority: number;
}

export class SharedUtilsHandler5EventBus {
  private handlers: SharedUtilsHandler5Handler[] = [];
  private history: SharedUtilsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedUtilsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUtilsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUtilsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUtilsHandler5Handler(
  type: string,
  fn: (event: SharedUtilsHandler5Event) => Promise<void>,
  priority = 0
): SharedUtilsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}