export interface App2FeatureReviewsHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureReviewsHandler1Handler {
  canHandle(event: App2FeatureReviewsHandler1Event): boolean;
  handle(event: App2FeatureReviewsHandler1Event): Promise<void>;
  priority: number;
}

export class App2FeatureReviewsHandler1EventBus {
  private handlers: App2FeatureReviewsHandler1Handler[] = [];
  private history: App2FeatureReviewsHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App2FeatureReviewsHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureReviewsHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureReviewsHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureReviewsHandler1Handler(
  type: string,
  fn: (event: App2FeatureReviewsHandler1Event) => Promise<void>,
  priority = 0
): App2FeatureReviewsHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}