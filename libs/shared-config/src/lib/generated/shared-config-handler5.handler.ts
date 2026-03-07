export interface SharedConfigHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedConfigHandler5Handler {
  canHandle(event: SharedConfigHandler5Event): boolean;
  handle(event: SharedConfigHandler5Event): Promise<void>;
  priority: number;
}

export class SharedConfigHandler5EventBus {
  private handlers: SharedConfigHandler5Handler[] = [];
  private history: SharedConfigHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedConfigHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedConfigHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedConfigHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedConfigHandler5Handler(
  type: string,
  fn: (event: SharedConfigHandler5Event) => Promise<void>,
  priority = 0
): SharedConfigHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}