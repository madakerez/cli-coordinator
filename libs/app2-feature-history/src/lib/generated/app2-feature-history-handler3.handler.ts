export interface App2FeatureHistoryHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureHistoryHandler3Handler {
  canHandle(event: App2FeatureHistoryHandler3Event): boolean;
  handle(event: App2FeatureHistoryHandler3Event): Promise<void>;
  priority: number;
}

export class App2FeatureHistoryHandler3EventBus {
  private handlers: App2FeatureHistoryHandler3Handler[] = [];
  private history: App2FeatureHistoryHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App2FeatureHistoryHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureHistoryHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureHistoryHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureHistoryHandler3Handler(
  type: string,
  fn: (event: App2FeatureHistoryHandler3Event) => Promise<void>,
  priority = 0
): App2FeatureHistoryHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}