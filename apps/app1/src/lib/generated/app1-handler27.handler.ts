export interface App1Handler27Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1Handler27Handler {
  canHandle(event: App1Handler27Event): boolean;
  handle(event: App1Handler27Event): Promise<void>;
  priority: number;
}

export class App1Handler27EventBus {
  private handlers: App1Handler27Handler[] = [];
  private history: App1Handler27Event[] = [];
  private maxHistory = 370;

  register(handler: App1Handler27Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1Handler27Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1Handler27Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1Handler27Handler(
  type: string,
  fn: (event: App1Handler27Event) => Promise<void>,
  priority = 0
): App1Handler27Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}