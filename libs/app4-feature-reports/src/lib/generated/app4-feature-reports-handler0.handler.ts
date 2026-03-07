export interface App4FeatureReportsHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4FeatureReportsHandler0Handler {
  canHandle(event: App4FeatureReportsHandler0Event): boolean;
  handle(event: App4FeatureReportsHandler0Event): Promise<void>;
  priority: number;
}

export class App4FeatureReportsHandler0EventBus {
  private handlers: App4FeatureReportsHandler0Handler[] = [];
  private history: App4FeatureReportsHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App4FeatureReportsHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4FeatureReportsHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4FeatureReportsHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4FeatureReportsHandler0Handler(
  type: string,
  fn: (event: App4FeatureReportsHandler0Event) => Promise<void>,
  priority = 0
): App4FeatureReportsHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}