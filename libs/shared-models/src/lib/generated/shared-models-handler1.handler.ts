export interface SharedModelsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedModelsHandler1Handler {
  canHandle(event: SharedModelsHandler1Event): boolean;
  handle(event: SharedModelsHandler1Event): Promise<void>;
  priority: number;
}

export class SharedModelsHandler1EventBus {
  private handlers: SharedModelsHandler1Handler[] = [];
  private history: SharedModelsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedModelsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedModelsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedModelsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedModelsHandler1Handler(
  type: string,
  fn: (event: SharedModelsHandler1Event) => Promise<void>,
  priority = 0
): SharedModelsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}