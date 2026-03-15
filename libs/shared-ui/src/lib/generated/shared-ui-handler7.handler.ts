export interface SharedUiHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUiHandler7Handler {
  canHandle(event: SharedUiHandler7Event): boolean;
  handle(event: SharedUiHandler7Event): Promise<void>;
  priority: number;
}

export class SharedUiHandler7EventBus {
  private handlers: SharedUiHandler7Handler[] = [];
  private history: SharedUiHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedUiHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUiHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUiHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUiHandler7Handler(
  type: string,
  fn: (event: SharedUiHandler7Event) => Promise<void>,
  priority = 0
): SharedUiHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}