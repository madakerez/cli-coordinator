export interface App3FeatureHistoryHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureHistoryHandler3Handler {
  canHandle(event: App3FeatureHistoryHandler3Event): boolean;
  handle(event: App3FeatureHistoryHandler3Event): Promise<void>;
  priority: number;
}

export class App3FeatureHistoryHandler3EventBus {
  private handlers: App3FeatureHistoryHandler3Handler[] = [];
  private history: App3FeatureHistoryHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App3FeatureHistoryHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureHistoryHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureHistoryHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureHistoryHandler3Handler(
  type: string,
  fn: (event: App3FeatureHistoryHandler3Event) => Promise<void>,
  priority = 0
): App3FeatureHistoryHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}