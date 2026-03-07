export interface App1UtilDatesHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1UtilDatesHandler1Handler {
  canHandle(event: App1UtilDatesHandler1Event): boolean;
  handle(event: App1UtilDatesHandler1Event): Promise<void>;
  priority: number;
}

export class App1UtilDatesHandler1EventBus {
  private handlers: App1UtilDatesHandler1Handler[] = [];
  private history: App1UtilDatesHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App1UtilDatesHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1UtilDatesHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1UtilDatesHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1UtilDatesHandler1Handler(
  type: string,
  fn: (event: App1UtilDatesHandler1Event) => Promise<void>,
  priority = 0
): App1UtilDatesHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}