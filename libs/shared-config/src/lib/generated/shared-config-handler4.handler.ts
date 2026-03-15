export interface SharedConfigHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedConfigHandler4Handler {
  canHandle(event: SharedConfigHandler4Event): boolean;
  handle(event: SharedConfigHandler4Event): Promise<void>;
  priority: number;
}

export class SharedConfigHandler4EventBus {
  private handlers: SharedConfigHandler4Handler[] = [];
  private history: SharedConfigHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedConfigHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedConfigHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedConfigHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedConfigHandler4Handler(
  type: string,
  fn: (event: SharedConfigHandler4Event) => Promise<void>,
  priority = 0
): SharedConfigHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}