export interface SharedValidationHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedValidationHandler1Handler {
  canHandle(event: SharedValidationHandler1Event): boolean;
  handle(event: SharedValidationHandler1Event): Promise<void>;
  priority: number;
}

export class SharedValidationHandler1EventBus {
  private handlers: SharedValidationHandler1Handler[] = [];
  private history: SharedValidationHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedValidationHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedValidationHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedValidationHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedValidationHandler1Handler(
  type: string,
  fn: (event: SharedValidationHandler1Event) => Promise<void>,
  priority = 0
): SharedValidationHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}