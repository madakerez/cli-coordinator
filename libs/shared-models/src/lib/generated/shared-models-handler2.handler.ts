export interface SharedModelsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedModelsHandler2Handler {
  canHandle(event: SharedModelsHandler2Event): boolean;
  handle(event: SharedModelsHandler2Event): Promise<void>;
  priority: number;
}

export class SharedModelsHandler2EventBus {
  private handlers: SharedModelsHandler2Handler[] = [];
  private history: SharedModelsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedModelsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedModelsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedModelsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedModelsHandler2Handler(
  type: string,
  fn: (event: SharedModelsHandler2Event) => Promise<void>,
  priority = 0
): SharedModelsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}