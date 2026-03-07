export interface SharedCryptoHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCryptoHandler0Handler {
  canHandle(event: SharedCryptoHandler0Event): boolean;
  handle(event: SharedCryptoHandler0Event): Promise<void>;
  priority: number;
}

export class SharedCryptoHandler0EventBus {
  private handlers: SharedCryptoHandler0Handler[] = [];
  private history: SharedCryptoHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedCryptoHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCryptoHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCryptoHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCryptoHandler0Handler(
  type: string,
  fn: (event: SharedCryptoHandler0Event) => Promise<void>,
  priority = 0
): SharedCryptoHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}