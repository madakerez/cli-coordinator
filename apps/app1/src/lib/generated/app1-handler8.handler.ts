export interface App1Handler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1Handler8Handler {
  canHandle(event: App1Handler8Event): boolean;
  handle(event: App1Handler8Event): Promise<void>;
  priority: number;
}

export class App1Handler8EventBus {
  private handlers: App1Handler8Handler[] = [];
  private history: App1Handler8Event[] = [];
  private maxHistory = 180;

  register(handler: App1Handler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1Handler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1Handler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1Handler8Handler(
  type: string,
  fn: (event: App1Handler8Event) => Promise<void>,
  priority = 0
): App1Handler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}