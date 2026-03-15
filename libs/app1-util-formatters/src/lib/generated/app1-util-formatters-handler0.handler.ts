export interface App1UtilFormattersHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1UtilFormattersHandler0Handler {
  canHandle(event: App1UtilFormattersHandler0Event): boolean;
  handle(event: App1UtilFormattersHandler0Event): Promise<void>;
  priority: number;
}

export class App1UtilFormattersHandler0EventBus {
  private handlers: App1UtilFormattersHandler0Handler[] = [];
  private history: App1UtilFormattersHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App1UtilFormattersHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1UtilFormattersHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1UtilFormattersHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1UtilFormattersHandler0Handler(
  type: string,
  fn: (event: App1UtilFormattersHandler0Event) => Promise<void>,
  priority = 0
): App1UtilFormattersHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}