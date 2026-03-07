export interface SharedConfigHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedConfigHandler6Handler {
  canHandle(event: SharedConfigHandler6Event): boolean;
  handle(event: SharedConfigHandler6Event): Promise<void>;
  priority: number;
}

export class SharedConfigHandler6EventBus {
  private handlers: SharedConfigHandler6Handler[] = [];
  private history: SharedConfigHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedConfigHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedConfigHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedConfigHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedConfigHandler6Handler(
  type: string,
  fn: (event: SharedConfigHandler6Event) => Promise<void>,
  priority = 0
): SharedConfigHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}