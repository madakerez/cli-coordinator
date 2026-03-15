export interface SharedConfigHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedConfigHandler7Handler {
  canHandle(event: SharedConfigHandler7Event): boolean;
  handle(event: SharedConfigHandler7Event): Promise<void>;
  priority: number;
}

export class SharedConfigHandler7EventBus {
  private handlers: SharedConfigHandler7Handler[] = [];
  private history: SharedConfigHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedConfigHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedConfigHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedConfigHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedConfigHandler7Handler(
  type: string,
  fn: (event: SharedConfigHandler7Event) => Promise<void>,
  priority = 0
): SharedConfigHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}