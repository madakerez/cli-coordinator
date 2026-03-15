export interface SharedHttpHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedHttpHandler3Handler {
  canHandle(event: SharedHttpHandler3Event): boolean;
  handle(event: SharedHttpHandler3Event): Promise<void>;
  priority: number;
}

export class SharedHttpHandler3EventBus {
  private handlers: SharedHttpHandler3Handler[] = [];
  private history: SharedHttpHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedHttpHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedHttpHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedHttpHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedHttpHandler3Handler(
  type: string,
  fn: (event: SharedHttpHandler3Event) => Promise<void>,
  priority = 0
): SharedHttpHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}