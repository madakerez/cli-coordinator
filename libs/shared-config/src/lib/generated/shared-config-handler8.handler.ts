export interface SharedConfigHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedConfigHandler8Handler {
  canHandle(event: SharedConfigHandler8Event): boolean;
  handle(event: SharedConfigHandler8Event): Promise<void>;
  priority: number;
}

export class SharedConfigHandler8EventBus {
  private handlers: SharedConfigHandler8Handler[] = [];
  private history: SharedConfigHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedConfigHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedConfigHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedConfigHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedConfigHandler8Handler(
  type: string,
  fn: (event: SharedConfigHandler8Event) => Promise<void>,
  priority = 0
): SharedConfigHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}