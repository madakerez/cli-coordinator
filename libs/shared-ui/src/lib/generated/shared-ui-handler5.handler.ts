export interface SharedUiHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUiHandler5Handler {
  canHandle(event: SharedUiHandler5Event): boolean;
  handle(event: SharedUiHandler5Event): Promise<void>;
  priority: number;
}

export class SharedUiHandler5EventBus {
  private handlers: SharedUiHandler5Handler[] = [];
  private history: SharedUiHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedUiHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUiHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUiHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUiHandler5Handler(
  type: string,
  fn: (event: SharedUiHandler5Event) => Promise<void>,
  priority = 0
): SharedUiHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}