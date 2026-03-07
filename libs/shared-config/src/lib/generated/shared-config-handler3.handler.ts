export interface SharedConfigHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedConfigHandler3Handler {
  canHandle(event: SharedConfigHandler3Event): boolean;
  handle(event: SharedConfigHandler3Event): Promise<void>;
  priority: number;
}

export class SharedConfigHandler3EventBus {
  private handlers: SharedConfigHandler3Handler[] = [];
  private history: SharedConfigHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedConfigHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedConfigHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedConfigHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedConfigHandler3Handler(
  type: string,
  fn: (event: SharedConfigHandler3Event) => Promise<void>,
  priority = 0
): SharedConfigHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}