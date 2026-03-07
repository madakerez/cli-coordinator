export interface SharedAnalyticsHandler9Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAnalyticsHandler9Handler {
  canHandle(event: SharedAnalyticsHandler9Event): boolean;
  handle(event: SharedAnalyticsHandler9Event): Promise<void>;
  priority: number;
}

export class SharedAnalyticsHandler9EventBus {
  private handlers: SharedAnalyticsHandler9Handler[] = [];
  private history: SharedAnalyticsHandler9Event[] = [];
  private maxHistory = 190;

  register(handler: SharedAnalyticsHandler9Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAnalyticsHandler9Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAnalyticsHandler9Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAnalyticsHandler9Handler(
  type: string,
  fn: (event: SharedAnalyticsHandler9Event) => Promise<void>,
  priority = 0
): SharedAnalyticsHandler9Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}