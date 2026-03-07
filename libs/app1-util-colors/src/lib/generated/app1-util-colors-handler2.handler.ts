export interface App1UtilColorsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1UtilColorsHandler2Handler {
  canHandle(event: App1UtilColorsHandler2Event): boolean;
  handle(event: App1UtilColorsHandler2Event): Promise<void>;
  priority: number;
}

export class App1UtilColorsHandler2EventBus {
  private handlers: App1UtilColorsHandler2Handler[] = [];
  private history: App1UtilColorsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App1UtilColorsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1UtilColorsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1UtilColorsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1UtilColorsHandler2Handler(
  type: string,
  fn: (event: App1UtilColorsHandler2Event) => Promise<void>,
  priority = 0
): App1UtilColorsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}