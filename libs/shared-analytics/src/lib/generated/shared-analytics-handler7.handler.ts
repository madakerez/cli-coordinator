export interface SharedAnalyticsHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAnalyticsHandler7Handler {
  canHandle(event: SharedAnalyticsHandler7Event): boolean;
  handle(event: SharedAnalyticsHandler7Event): Promise<void>;
  priority: number;
}

export class SharedAnalyticsHandler7EventBus {
  private handlers: SharedAnalyticsHandler7Handler[] = [];
  private history: SharedAnalyticsHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: SharedAnalyticsHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAnalyticsHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAnalyticsHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAnalyticsHandler7Handler(
  type: string,
  fn: (event: SharedAnalyticsHandler7Event) => Promise<void>,
  priority = 0
): SharedAnalyticsHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}