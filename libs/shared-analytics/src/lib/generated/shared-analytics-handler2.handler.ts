export interface SharedAnalyticsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAnalyticsHandler2Handler {
  canHandle(event: SharedAnalyticsHandler2Event): boolean;
  handle(event: SharedAnalyticsHandler2Event): Promise<void>;
  priority: number;
}

export class SharedAnalyticsHandler2EventBus {
  private handlers: SharedAnalyticsHandler2Handler[] = [];
  private history: SharedAnalyticsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: SharedAnalyticsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAnalyticsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAnalyticsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAnalyticsHandler2Handler(
  type: string,
  fn: (event: SharedAnalyticsHandler2Event) => Promise<void>,
  priority = 0
): SharedAnalyticsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}