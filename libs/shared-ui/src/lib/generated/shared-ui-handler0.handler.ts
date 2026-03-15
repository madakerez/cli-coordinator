export interface SharedUiHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUiHandler0Handler {
  canHandle(event: SharedUiHandler0Event): boolean;
  handle(event: SharedUiHandler0Event): Promise<void>;
  priority: number;
}

export class SharedUiHandler0EventBus {
  private handlers: SharedUiHandler0Handler[] = [];
  private history: SharedUiHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedUiHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUiHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUiHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUiHandler0Handler(
  type: string,
  fn: (event: SharedUiHandler0Event) => Promise<void>,
  priority = 0
): SharedUiHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}