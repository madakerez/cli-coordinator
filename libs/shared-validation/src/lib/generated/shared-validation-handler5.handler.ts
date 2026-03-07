export interface SharedValidationHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedValidationHandler5Handler {
  canHandle(event: SharedValidationHandler5Event): boolean;
  handle(event: SharedValidationHandler5Event): Promise<void>;
  priority: number;
}

export class SharedValidationHandler5EventBus {
  private handlers: SharedValidationHandler5Handler[] = [];
  private history: SharedValidationHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedValidationHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedValidationHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedValidationHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedValidationHandler5Handler(
  type: string,
  fn: (event: SharedValidationHandler5Event) => Promise<void>,
  priority = 0
): SharedValidationHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}