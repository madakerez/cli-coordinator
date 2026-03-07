export interface App1Handler39Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1Handler39Handler {
  canHandle(event: App1Handler39Event): boolean;
  handle(event: App1Handler39Event): Promise<void>;
  priority: number;
}

export class App1Handler39EventBus {
  private handlers: App1Handler39Handler[] = [];
  private history: App1Handler39Event[] = [];
  private maxHistory = 490;

  register(handler: App1Handler39Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1Handler39Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1Handler39Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1Handler39Handler(
  type: string,
  fn: (event: App1Handler39Event) => Promise<void>,
  priority = 0
): App1Handler39Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}