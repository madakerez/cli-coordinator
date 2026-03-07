export interface App1Handler9Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1Handler9Handler {
  canHandle(event: App1Handler9Event): boolean;
  handle(event: App1Handler9Event): Promise<void>;
  priority: number;
}

export class App1Handler9EventBus {
  private handlers: App1Handler9Handler[] = [];
  private history: App1Handler9Event[] = [];
  private maxHistory = 190;

  register(handler: App1Handler9Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1Handler9Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1Handler9Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1Handler9Handler(
  type: string,
  fn: (event: App1Handler9Event) => Promise<void>,
  priority = 0
): App1Handler9Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}