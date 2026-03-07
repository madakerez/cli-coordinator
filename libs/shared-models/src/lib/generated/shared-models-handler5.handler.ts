export interface SharedModelsHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedModelsHandler5Handler {
  canHandle(event: SharedModelsHandler5Event): boolean;
  handle(event: SharedModelsHandler5Event): Promise<void>;
  priority: number;
}

export class SharedModelsHandler5EventBus {
  private handlers: SharedModelsHandler5Handler[] = [];
  private history: SharedModelsHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedModelsHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedModelsHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedModelsHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedModelsHandler5Handler(
  type: string,
  fn: (event: SharedModelsHandler5Event) => Promise<void>,
  priority = 0
): SharedModelsHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}