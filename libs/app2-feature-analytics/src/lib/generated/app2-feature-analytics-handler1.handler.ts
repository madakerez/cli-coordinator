export interface App2FeatureAnalyticsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureAnalyticsHandler1Handler {
  canHandle(event: App2FeatureAnalyticsHandler1Event): boolean;
  handle(event: App2FeatureAnalyticsHandler1Event): Promise<void>;
  priority: number;
}

export class App2FeatureAnalyticsHandler1EventBus {
  private handlers: App2FeatureAnalyticsHandler1Handler[] = [];
  private history: App2FeatureAnalyticsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App2FeatureAnalyticsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureAnalyticsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureAnalyticsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureAnalyticsHandler1Handler(
  type: string,
  fn: (event: App2FeatureAnalyticsHandler1Event) => Promise<void>,
  priority = 0
): App2FeatureAnalyticsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}