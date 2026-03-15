export interface SharedCryptoHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCryptoHandler2Handler {
  canHandle(event: SharedCryptoHandler2Event): boolean;
  handle(event: SharedCryptoHandler2Event): Promise<void>;
  priority: number;
}

export class SharedCryptoHandler2EventBus {
  private handlers: SharedCryptoHandler2Handler[] = [];
  private history: SharedCryptoHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedCryptoHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCryptoHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCryptoHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCryptoHandler2Handler(
  type: string,
  fn: (event: SharedCryptoHandler2Event) => Promise<void>,
  priority = 0
): SharedCryptoHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}