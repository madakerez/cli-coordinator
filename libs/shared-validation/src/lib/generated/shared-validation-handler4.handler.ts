export interface SharedValidationHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedValidationHandler4Handler {
  canHandle(event: SharedValidationHandler4Event): boolean;
  handle(event: SharedValidationHandler4Event): Promise<void>;
  priority: number;
}

export class SharedValidationHandler4EventBus {
  private handlers: SharedValidationHandler4Handler[] = [];
  private history: SharedValidationHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedValidationHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedValidationHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedValidationHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedValidationHandler4Handler(
  type: string,
  fn: (event: SharedValidationHandler4Event) => Promise<void>,
  priority = 0
): SharedValidationHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}