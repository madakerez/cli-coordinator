export interface SharedUtilsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUtilsHandler1Handler {
  canHandle(event: SharedUtilsHandler1Event): boolean;
  handle(event: SharedUtilsHandler1Event): Promise<void>;
  priority: number;
}

export class SharedUtilsHandler1EventBus {
  private handlers: SharedUtilsHandler1Handler[] = [];
  private history: SharedUtilsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedUtilsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUtilsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUtilsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUtilsHandler1Handler(
  type: string,
  fn: (event: SharedUtilsHandler1Event) => Promise<void>,
  priority = 0
): SharedUtilsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}