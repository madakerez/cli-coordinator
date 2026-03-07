export interface SharedValidationHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedValidationHandler0Handler {
  canHandle(event: SharedValidationHandler0Event): boolean;
  handle(event: SharedValidationHandler0Event): Promise<void>;
  priority: number;
}

export class SharedValidationHandler0EventBus {
  private handlers: SharedValidationHandler0Handler[] = [];
  private history: SharedValidationHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedValidationHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedValidationHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedValidationHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedValidationHandler0Handler(
  type: string,
  fn: (event: SharedValidationHandler0Event) => Promise<void>,
  priority = 0
): SharedValidationHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}