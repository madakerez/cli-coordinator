export interface SharedCryptoHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCryptoHandler4Handler {
  canHandle(event: SharedCryptoHandler4Event): boolean;
  handle(event: SharedCryptoHandler4Event): Promise<void>;
  priority: number;
}

export class SharedCryptoHandler4EventBus {
  private handlers: SharedCryptoHandler4Handler[] = [];
  private history: SharedCryptoHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: SharedCryptoHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCryptoHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCryptoHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCryptoHandler4Handler(
  type: string,
  fn: (event: SharedCryptoHandler4Event) => Promise<void>,
  priority = 0
): SharedCryptoHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}