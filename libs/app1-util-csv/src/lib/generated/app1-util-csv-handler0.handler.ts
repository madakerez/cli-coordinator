export interface App1UtilCsvHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1UtilCsvHandler0Handler {
  canHandle(event: App1UtilCsvHandler0Event): boolean;
  handle(event: App1UtilCsvHandler0Event): Promise<void>;
  priority: number;
}

export class App1UtilCsvHandler0EventBus {
  private handlers: App1UtilCsvHandler0Handler[] = [];
  private history: App1UtilCsvHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App1UtilCsvHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1UtilCsvHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1UtilCsvHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1UtilCsvHandler0Handler(
  type: string,
  fn: (event: App1UtilCsvHandler0Event) => Promise<void>,
  priority = 0
): App1UtilCsvHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}