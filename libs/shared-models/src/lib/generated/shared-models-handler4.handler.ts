export interface SharedModelsHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedModelsHandler4Handler {
  canHandle(event: SharedModelsHandler4Event): boolean;
  handle(event: SharedModelsHandler4Event): Promise<void>;
  priority: number;
}

export class SharedModelsHandler4EventBus {
  private handlers: SharedModelsHandler4Handler[] = [];
  private history: SharedModelsHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedModelsHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedModelsHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedModelsHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedModelsHandler4Handler(
  type: string,
  fn: (event: SharedModelsHandler4Event) => Promise<void>,
  priority = 0
): SharedModelsHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}