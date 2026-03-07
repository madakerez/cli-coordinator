export interface App2FeatureRatingsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureRatingsHandler3Handler {
  canHandle(event: App2FeatureRatingsHandler3Event): boolean;
  handle(event: App2FeatureRatingsHandler3Event): Promise<void>;
  priority: number;
}

export class App2FeatureRatingsHandler3EventBus {
  private handlers: App2FeatureRatingsHandler3Handler[] = [];
  private history: App2FeatureRatingsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App2FeatureRatingsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureRatingsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureRatingsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureRatingsHandler3Handler(
  type: string,
  fn: (event: App2FeatureRatingsHandler3Event) => Promise<void>,
  priority = 0
): App2FeatureRatingsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}