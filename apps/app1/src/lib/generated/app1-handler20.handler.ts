export interface App1Handler20Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1Handler20Handler {
  canHandle(event: App1Handler20Event): boolean;
  handle(event: App1Handler20Event): Promise<void>;
  priority: number;
}

export class App1Handler20EventBus {
  private handlers: App1Handler20Handler[] = [];
  private history: App1Handler20Event[] = [];
  private maxHistory = 300;

  register(handler: App1Handler20Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1Handler20Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1Handler20Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1Handler20Handler(
  type: string,
  fn: (event: App1Handler20Event) => Promise<void>,
  priority = 0
): App1Handler20Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}