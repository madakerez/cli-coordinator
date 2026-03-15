export interface SharedHttpHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedHttpHandler8Handler {
  canHandle(event: SharedHttpHandler8Event): boolean;
  handle(event: SharedHttpHandler8Event): Promise<void>;
  priority: number;
}

export class SharedHttpHandler8EventBus {
  private handlers: SharedHttpHandler8Handler[] = [];
  private history: SharedHttpHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedHttpHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedHttpHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedHttpHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedHttpHandler8Handler(
  type: string,
  fn: (event: SharedHttpHandler8Event) => Promise<void>,
  priority = 0
): SharedHttpHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}