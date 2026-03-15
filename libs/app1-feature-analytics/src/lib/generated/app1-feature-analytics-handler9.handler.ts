export interface App1FeatureAnalyticsHandler9Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureAnalyticsHandler9Handler {
  canHandle(event: App1FeatureAnalyticsHandler9Event): boolean;
  handle(event: App1FeatureAnalyticsHandler9Event): Promise<void>;
  priority: number;
}

export class App1FeatureAnalyticsHandler9EventBus {
  private handlers: App1FeatureAnalyticsHandler9Handler[] = [];
  private history: App1FeatureAnalyticsHandler9Event[] = [];
  private maxHistory = 190;

  register(handler: App1FeatureAnalyticsHandler9Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureAnalyticsHandler9Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureAnalyticsHandler9Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureAnalyticsHandler9Handler(
  type: string,
  fn: (event: App1FeatureAnalyticsHandler9Event) => Promise<void>,
  priority = 0
): App1FeatureAnalyticsHandler9Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}