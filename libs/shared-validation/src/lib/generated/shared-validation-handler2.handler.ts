export interface SharedValidationHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedValidationHandler2Handler {
  canHandle(event: SharedValidationHandler2Event): boolean;
  handle(event: SharedValidationHandler2Event): Promise<void>;
  priority: number;
}

export class SharedValidationHandler2EventBus {
  private handlers: SharedValidationHandler2Handler[] = [];
  private history: SharedValidationHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedValidationHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedValidationHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedValidationHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedValidationHandler2Handler(
  type: string,
  fn: (event: SharedValidationHandler2Event) => Promise<void>,
  priority = 0
): SharedValidationHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}