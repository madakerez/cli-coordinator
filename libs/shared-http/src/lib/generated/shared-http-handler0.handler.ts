export interface SharedHttpHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedHttpHandler0Handler {
  canHandle(event: SharedHttpHandler0Event): boolean;
  handle(event: SharedHttpHandler0Event): Promise<void>;
  priority: number;
}

export class SharedHttpHandler0EventBus {
  private handlers: SharedHttpHandler0Handler[] = [];
  private history: SharedHttpHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedHttpHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedHttpHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedHttpHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedHttpHandler0Handler(
  type: string,
  fn: (event: SharedHttpHandler0Event) => Promise<void>,
  priority = 0
): SharedHttpHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}