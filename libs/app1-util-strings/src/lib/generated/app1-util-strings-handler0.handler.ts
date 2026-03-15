export interface App1UtilStringsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1UtilStringsHandler0Handler {
  canHandle(event: App1UtilStringsHandler0Event): boolean;
  handle(event: App1UtilStringsHandler0Event): Promise<void>;
  priority: number;
}

export class App1UtilStringsHandler0EventBus {
  private handlers: App1UtilStringsHandler0Handler[] = [];
  private history: App1UtilStringsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App1UtilStringsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1UtilStringsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1UtilStringsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1UtilStringsHandler0Handler(
  type: string,
  fn: (event: App1UtilStringsHandler0Event) => Promise<void>,
  priority = 0
): App1UtilStringsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}