export interface SharedAuthHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAuthHandler6Handler {
  canHandle(event: SharedAuthHandler6Event): boolean;
  handle(event: SharedAuthHandler6Event): Promise<void>;
  priority: number;
}

export class SharedAuthHandler6EventBus {
  private handlers: SharedAuthHandler6Handler[] = [];
  private history: SharedAuthHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedAuthHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAuthHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAuthHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAuthHandler6Handler(
  type: string,
  fn: (event: SharedAuthHandler6Event) => Promise<void>,
  priority = 0
): SharedAuthHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}