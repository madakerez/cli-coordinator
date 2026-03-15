export interface SharedUiHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUiHandler2Handler {
  canHandle(event: SharedUiHandler2Event): boolean;
  handle(event: SharedUiHandler2Event): Promise<void>;
  priority: number;
}

export class SharedUiHandler2EventBus {
  private handlers: SharedUiHandler2Handler[] = [];
  private history: SharedUiHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedUiHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUiHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUiHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUiHandler2Handler(
  type: string,
  fn: (event: SharedUiHandler2Event) => Promise<void>,
  priority = 0
): SharedUiHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}