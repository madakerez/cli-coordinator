export interface SharedCryptoHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCryptoHandler1Handler {
  canHandle(event: SharedCryptoHandler1Event): boolean;
  handle(event: SharedCryptoHandler1Event): Promise<void>;
  priority: number;
}

export class SharedCryptoHandler1EventBus {
  private handlers: SharedCryptoHandler1Handler[] = [];
  private history: SharedCryptoHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: SharedCryptoHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCryptoHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCryptoHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCryptoHandler1Handler(
  type: string,
  fn: (event: SharedCryptoHandler1Event) => Promise<void>,
  priority = 0
): SharedCryptoHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}