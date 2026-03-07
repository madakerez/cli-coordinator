export interface SharedModelsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedModelsHandler0Handler {
  canHandle(event: SharedModelsHandler0Event): boolean;
  handle(event: SharedModelsHandler0Event): Promise<void>;
  priority: number;
}

export class SharedModelsHandler0EventBus {
  private handlers: SharedModelsHandler0Handler[] = [];
  private history: SharedModelsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedModelsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedModelsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedModelsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedModelsHandler0Handler(
  type: string,
  fn: (event: SharedModelsHandler0Event) => Promise<void>,
  priority = 0
): SharedModelsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}