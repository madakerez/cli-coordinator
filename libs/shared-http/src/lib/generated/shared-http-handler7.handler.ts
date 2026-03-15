export interface SharedHttpHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedHttpHandler7Handler {
  canHandle(event: SharedHttpHandler7Event): boolean;
  handle(event: SharedHttpHandler7Event): Promise<void>;
  priority: number;
}

export class SharedHttpHandler7EventBus {
  private handlers: SharedHttpHandler7Handler[] = [];
  private history: SharedHttpHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedHttpHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedHttpHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedHttpHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedHttpHandler7Handler(
  type: string,
  fn: (event: SharedHttpHandler7Event) => Promise<void>,
  priority = 0
): SharedHttpHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}