export interface SharedUiHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUiHandler6Handler {
  canHandle(event: SharedUiHandler6Event): boolean;
  handle(event: SharedUiHandler6Event): Promise<void>;
  priority: number;
}

export class SharedUiHandler6EventBus {
  private handlers: SharedUiHandler6Handler[] = [];
  private history: SharedUiHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedUiHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUiHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUiHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUiHandler6Handler(
  type: string,
  fn: (event: SharedUiHandler6Event) => Promise<void>,
  priority = 0
): SharedUiHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}