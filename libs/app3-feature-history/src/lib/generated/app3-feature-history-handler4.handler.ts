export interface App3FeatureHistoryHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureHistoryHandler4Handler {
  canHandle(event: App3FeatureHistoryHandler4Event): boolean;
  handle(event: App3FeatureHistoryHandler4Event): Promise<void>;
  priority: number;
}

export class App3FeatureHistoryHandler4EventBus {
  private handlers: App3FeatureHistoryHandler4Handler[] = [];
  private history: App3FeatureHistoryHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: App3FeatureHistoryHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureHistoryHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureHistoryHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureHistoryHandler4Handler(
  type: string,
  fn: (event: App3FeatureHistoryHandler4Event) => Promise<void>,
  priority = 0
): App3FeatureHistoryHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}