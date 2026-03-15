export interface SharedValidationHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedValidationHandler3Handler {
  canHandle(event: SharedValidationHandler3Event): boolean;
  handle(event: SharedValidationHandler3Event): Promise<void>;
  priority: number;
}

export class SharedValidationHandler3EventBus {
  private handlers: SharedValidationHandler3Handler[] = [];
  private history: SharedValidationHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedValidationHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedValidationHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedValidationHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedValidationHandler3Handler(
  type: string,
  fn: (event: SharedValidationHandler3Event) => Promise<void>,
  priority = 0
): SharedValidationHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}