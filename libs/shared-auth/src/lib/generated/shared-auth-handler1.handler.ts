export interface SharedAuthHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAuthHandler1Handler {
  canHandle(event: SharedAuthHandler1Event): boolean;
  handle(event: SharedAuthHandler1Event): Promise<void>;
  priority: number;
}

export class SharedAuthHandler1EventBus {
  private handlers: SharedAuthHandler1Handler[] = [];
  private history: SharedAuthHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedAuthHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAuthHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAuthHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAuthHandler1Handler(
  type: string,
  fn: (event: SharedAuthHandler1Event) => Promise<void>,
  priority = 0
): SharedAuthHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}