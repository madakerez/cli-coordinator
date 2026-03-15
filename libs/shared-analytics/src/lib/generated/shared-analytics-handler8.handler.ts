export interface SharedAnalyticsHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface SharedAnalyticsHandler8Handler {
  canHandle(event: SharedAnalyticsHandler8Event): boolean;
  handle(event: SharedAnalyticsHandler8Event): Promise<void>;
  priority: number;
}

export class SharedAnalyticsHandler8EventBus {
  private handlers: SharedAnalyticsHandler8Handler[] = [];
  private history: SharedAnalyticsHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: SharedAnalyticsHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: SharedAnalyticsHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<SharedAnalyticsHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createSharedAnalyticsHandler8Handler(
  type: string,
  fn: (event: SharedAnalyticsHandler8Event) => Promise<void>,
  priority = 0
): SharedAnalyticsHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}