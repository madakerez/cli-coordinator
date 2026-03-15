export interface SharedAnalyticsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAnalyticsHandler3Handler {
  canHandle(event: SharedAnalyticsHandler3Event): boolean;
  handle(event: SharedAnalyticsHandler3Event): Promise<void>;
  priority: number;
}

export class SharedAnalyticsHandler3EventBus {
  private handlers: SharedAnalyticsHandler3Handler[] = [];
  private history: SharedAnalyticsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: SharedAnalyticsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAnalyticsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAnalyticsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAnalyticsHandler3Handler(
  type: string,
  fn: (event: SharedAnalyticsHandler3Event) => Promise<void>,
  priority = 0
): SharedAnalyticsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}