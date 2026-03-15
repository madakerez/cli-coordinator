export interface SharedAnalyticsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAnalyticsHandler0Handler {
  canHandle(event: SharedAnalyticsHandler0Event): boolean;
  handle(event: SharedAnalyticsHandler0Event): Promise<void>;
  priority: number;
}

export class SharedAnalyticsHandler0EventBus {
  private handlers: SharedAnalyticsHandler0Handler[] = [];
  private history: SharedAnalyticsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: SharedAnalyticsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAnalyticsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAnalyticsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAnalyticsHandler0Handler(
  type: string,
  fn: (event: SharedAnalyticsHandler0Event) => Promise<void>,
  priority = 0
): SharedAnalyticsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}