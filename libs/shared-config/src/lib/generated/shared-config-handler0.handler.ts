export interface SharedConfigHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedConfigHandler0Handler {
  canHandle(event: SharedConfigHandler0Event): boolean;
  handle(event: SharedConfigHandler0Event): Promise<void>;
  priority: number;
}

export class SharedConfigHandler0EventBus {
  private handlers: SharedConfigHandler0Handler[] = [];
  private history: SharedConfigHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedConfigHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedConfigHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedConfigHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedConfigHandler0Handler(
  type: string,
  fn: (event: SharedConfigHandler0Event) => Promise<void>,
  priority = 0
): SharedConfigHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}