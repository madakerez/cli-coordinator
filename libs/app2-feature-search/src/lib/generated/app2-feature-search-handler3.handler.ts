export interface App2FeatureSearchHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureSearchHandler3Handler {
  canHandle(event: App2FeatureSearchHandler3Event): boolean;
  handle(event: App2FeatureSearchHandler3Event): Promise<void>;
  priority: number;
}

export class App2FeatureSearchHandler3EventBus {
  private handlers: App2FeatureSearchHandler3Handler[] = [];
  private history: App2FeatureSearchHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App2FeatureSearchHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureSearchHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureSearchHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureSearchHandler3Handler(
  type: string,
  fn: (event: App2FeatureSearchHandler3Event) => Promise<void>,
  priority = 0
): App2FeatureSearchHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}