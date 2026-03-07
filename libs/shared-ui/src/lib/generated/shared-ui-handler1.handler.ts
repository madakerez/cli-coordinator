export interface SharedUiHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedUiHandler1Handler {
  canHandle(event: SharedUiHandler1Event): boolean;
  handle(event: SharedUiHandler1Event): Promise<void>;
  priority: number;
}

export class SharedUiHandler1EventBus {
  private handlers: SharedUiHandler1Handler[] = [];
  private history: SharedUiHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedUiHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedUiHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedUiHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedUiHandler1Handler(
  type: string,
  fn: (event: SharedUiHandler1Event) => Promise<void>,
  priority = 0
): SharedUiHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}