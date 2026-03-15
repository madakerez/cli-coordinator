export interface SharedCryptoHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedCryptoHandler5Handler {
  canHandle(event: SharedCryptoHandler5Event): boolean;
  handle(event: SharedCryptoHandler5Event): Promise<void>;
  priority: number;
}

export class SharedCryptoHandler5EventBus {
  private handlers: SharedCryptoHandler5Handler[] = [];
  private history: SharedCryptoHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: SharedCryptoHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedCryptoHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedCryptoHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedCryptoHandler5Handler(
  type: string,
  fn: (event: SharedCryptoHandler5Event) => Promise<void>,
  priority = 0
): SharedCryptoHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}