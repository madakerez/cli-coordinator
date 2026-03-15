export interface SharedConfigHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedConfigHandler1Handler {
  canHandle(event: SharedConfigHandler1Event): boolean;
  handle(event: SharedConfigHandler1Event): Promise<void>;
  priority: number;
}

export class SharedConfigHandler1EventBus {
  private handlers: SharedConfigHandler1Handler[] = [];
  private history: SharedConfigHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedConfigHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedConfigHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedConfigHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedConfigHandler1Handler(
  type: string,
  fn: (event: SharedConfigHandler1Event) => Promise<void>,
  priority = 0
): SharedConfigHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}