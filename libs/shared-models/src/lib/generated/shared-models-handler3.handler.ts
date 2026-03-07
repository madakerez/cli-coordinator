export interface SharedModelsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedModelsHandler3Handler {
  canHandle(event: SharedModelsHandler3Event): boolean;
  handle(event: SharedModelsHandler3Event): Promise<void>;
  priority: number;
}

export class SharedModelsHandler3EventBus {
  private handlers: SharedModelsHandler3Handler[] = [];
  private history: SharedModelsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedModelsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedModelsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedModelsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedModelsHandler3Handler(
  type: string,
  fn: (event: SharedModelsHandler3Event) => Promise<void>,
  priority = 0
): SharedModelsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}