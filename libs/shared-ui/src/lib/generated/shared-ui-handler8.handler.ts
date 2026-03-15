export interface SharedUiHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUiHandler8Handler {
  canHandle(event: SharedUiHandler8Event): boolean;
  handle(event: SharedUiHandler8Event): Promise<void>;
  priority: number;
}

export class SharedUiHandler8EventBus {
  private handlers: SharedUiHandler8Handler[] = [];
  private history: SharedUiHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedUiHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUiHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUiHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUiHandler8Handler(
  type: string,
  fn: (event: SharedUiHandler8Event) => Promise<void>,
  priority = 0
): SharedUiHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}