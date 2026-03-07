export interface App1Handler10Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1Handler10Handler {
  canHandle(event: App1Handler10Event): boolean;
  handle(event: App1Handler10Event): Promise<void>;
  priority: number;
}

export class App1Handler10EventBus {
  private handlers: App1Handler10Handler[] = [];
  private history: App1Handler10Event[] = [];
  private maxHistory = 200;

  register(handler: App1Handler10Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1Handler10Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1Handler10Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1Handler10Handler(
  type: string,
  fn: (event: App1Handler10Event) => Promise<void>,
  priority = 0
): App1Handler10Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}