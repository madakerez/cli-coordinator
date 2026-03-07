export interface SharedUiHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUiHandler4Handler {
  canHandle(event: SharedUiHandler4Event): boolean;
  handle(event: SharedUiHandler4Event): Promise<void>;
  priority: number;
}

export class SharedUiHandler4EventBus {
  private handlers: SharedUiHandler4Handler[] = [];
  private history: SharedUiHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedUiHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUiHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUiHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUiHandler4Handler(
  type: string,
  fn: (event: SharedUiHandler4Event) => Promise<void>,
  priority = 0
): SharedUiHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}