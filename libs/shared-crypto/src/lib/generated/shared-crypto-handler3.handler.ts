export interface SharedCryptoHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCryptoHandler3Handler {
  canHandle(event: SharedCryptoHandler3Event): boolean;
  handle(event: SharedCryptoHandler3Event): Promise<void>;
  priority: number;
}

export class SharedCryptoHandler3EventBus {
  private handlers: SharedCryptoHandler3Handler[] = [];
  private history: SharedCryptoHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedCryptoHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCryptoHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCryptoHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCryptoHandler3Handler(
  type: string,
  fn: (event: SharedCryptoHandler3Event) => Promise<void>,
  priority = 0
): SharedCryptoHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}