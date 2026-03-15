export interface SharedHttpHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedHttpHandler5Handler {
  canHandle(event: SharedHttpHandler5Event): boolean;
  handle(event: SharedHttpHandler5Event): Promise<void>;
  priority: number;
}

export class SharedHttpHandler5EventBus {
  private handlers: SharedHttpHandler5Handler[] = [];
  private history: SharedHttpHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedHttpHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedHttpHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedHttpHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedHttpHandler5Handler(
  type: string,
  fn: (event: SharedHttpHandler5Event) => Promise<void>,
  priority = 0
): SharedHttpHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}