export interface SharedHttpHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedHttpHandler2Handler {
  canHandle(event: SharedHttpHandler2Event): boolean;
  handle(event: SharedHttpHandler2Event): Promise<void>;
  priority: number;
}

export class SharedHttpHandler2EventBus {
  private handlers: SharedHttpHandler2Handler[] = [];
  private history: SharedHttpHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedHttpHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedHttpHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedHttpHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedHttpHandler2Handler(
  type: string,
  fn: (event: SharedHttpHandler2Event) => Promise<void>,
  priority = 0
): SharedHttpHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}