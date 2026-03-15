export interface SharedHttpHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedHttpHandler1Handler {
  canHandle(event: SharedHttpHandler1Event): boolean;
  handle(event: SharedHttpHandler1Event): Promise<void>;
  priority: number;
}

export class SharedHttpHandler1EventBus {
  private handlers: SharedHttpHandler1Handler[] = [];
  private history: SharedHttpHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedHttpHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedHttpHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedHttpHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedHttpHandler1Handler(
  type: string,
  fn: (event: SharedHttpHandler1Event) => Promise<void>,
  priority = 0
): SharedHttpHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}