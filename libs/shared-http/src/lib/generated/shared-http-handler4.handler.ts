export interface SharedHttpHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedHttpHandler4Handler {
  canHandle(event: SharedHttpHandler4Event): boolean;
  handle(event: SharedHttpHandler4Event): Promise<void>;
  priority: number;
}

export class SharedHttpHandler4EventBus {
  private handlers: SharedHttpHandler4Handler[] = [];
  private history: SharedHttpHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedHttpHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedHttpHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedHttpHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedHttpHandler4Handler(
  type: string,
  fn: (event: SharedHttpHandler4Event) => Promise<void>,
  priority = 0
): SharedHttpHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}