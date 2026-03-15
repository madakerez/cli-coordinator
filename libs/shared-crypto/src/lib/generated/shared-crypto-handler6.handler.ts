export interface SharedCryptoHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCryptoHandler6Handler {
  canHandle(event: SharedCryptoHandler6Event): boolean;
  handle(event: SharedCryptoHandler6Event): Promise<void>;
  priority: number;
}

export class SharedCryptoHandler6EventBus {
  private handlers: SharedCryptoHandler6Handler[] = [];
  private history: SharedCryptoHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: SharedCryptoHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCryptoHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCryptoHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCryptoHandler6Handler(
  type: string,
  fn: (event: SharedCryptoHandler6Event) => Promise<void>,
  priority = 0
): SharedCryptoHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}