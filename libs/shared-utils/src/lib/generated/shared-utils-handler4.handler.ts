export interface SharedUtilsHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUtilsHandler4Handler {
  canHandle(event: SharedUtilsHandler4Event): boolean;
  handle(event: SharedUtilsHandler4Event): Promise<void>;
  priority: number;
}

export class SharedUtilsHandler4EventBus {
  private handlers: SharedUtilsHandler4Handler[] = [];
  private history: SharedUtilsHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedUtilsHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUtilsHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUtilsHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUtilsHandler4Handler(
  type: string,
  fn: (event: SharedUtilsHandler4Event) => Promise<void>,
  priority = 0
): SharedUtilsHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}