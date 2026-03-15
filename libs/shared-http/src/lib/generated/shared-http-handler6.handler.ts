export interface SharedHttpHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedHttpHandler6Handler {
  canHandle(event: SharedHttpHandler6Event): boolean;
  handle(event: SharedHttpHandler6Event): Promise<void>;
  priority: number;
}

export class SharedHttpHandler6EventBus {
  private handlers: SharedHttpHandler6Handler[] = [];
  private history: SharedHttpHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedHttpHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedHttpHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedHttpHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedHttpHandler6Handler(
  type: string,
  fn: (event: SharedHttpHandler6Event) => Promise<void>,
  priority = 0
): SharedHttpHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}