export interface SharedAuthHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAuthHandler5Handler {
  canHandle(event: SharedAuthHandler5Event): boolean;
  handle(event: SharedAuthHandler5Event): Promise<void>;
  priority: number;
}

export class SharedAuthHandler5EventBus {
  private handlers: SharedAuthHandler5Handler[] = [];
  private history: SharedAuthHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedAuthHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAuthHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAuthHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAuthHandler5Handler(
  type: string,
  fn: (event: SharedAuthHandler5Event) => Promise<void>,
  priority = 0
): SharedAuthHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}