export interface App4UtilCryptoHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4UtilCryptoHandler1Handler {
  canHandle(event: App4UtilCryptoHandler1Event): boolean;
  handle(event: App4UtilCryptoHandler1Event): Promise<void>;
  priority: number;
}

export class App4UtilCryptoHandler1EventBus {
  private handlers: App4UtilCryptoHandler1Handler[] = [];
  private history: App4UtilCryptoHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App4UtilCryptoHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4UtilCryptoHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4UtilCryptoHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4UtilCryptoHandler1Handler(
  type: string,
  fn: (event: App4UtilCryptoHandler1Event) => Promise<void>,
  priority = 0
): App4UtilCryptoHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}