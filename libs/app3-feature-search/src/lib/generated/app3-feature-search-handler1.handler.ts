export interface App3FeatureSearchHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureSearchHandler1Handler {
  canHandle(event: App3FeatureSearchHandler1Event): boolean;
  handle(event: App3FeatureSearchHandler1Event): Promise<void>;
  priority: number;
}

export class App3FeatureSearchHandler1EventBus {
  private handlers: App3FeatureSearchHandler1Handler[] = [];
  private history: App3FeatureSearchHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App3FeatureSearchHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureSearchHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureSearchHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureSearchHandler1Handler(
  type: string,
  fn: (event: App3FeatureSearchHandler1Event) => Promise<void>,
  priority = 0
): App3FeatureSearchHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}