export interface SharedAuthHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAuthHandler4Handler {
  canHandle(event: SharedAuthHandler4Event): boolean;
  handle(event: SharedAuthHandler4Event): Promise<void>;
  priority: number;
}

export class SharedAuthHandler4EventBus {
  private handlers: SharedAuthHandler4Handler[] = [];
  private history: SharedAuthHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedAuthHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAuthHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAuthHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAuthHandler4Handler(
  type: string,
  fn: (event: SharedAuthHandler4Event) => Promise<void>,
  priority = 0
): SharedAuthHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}