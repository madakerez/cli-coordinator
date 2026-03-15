export interface App4FeatureAlertsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4FeatureAlertsHandler3Handler {
  canHandle(event: App4FeatureAlertsHandler3Event): boolean;
  handle(event: App4FeatureAlertsHandler3Event): Promise<void>;
  priority: number;
}

export class App4FeatureAlertsHandler3EventBus {
  private handlers: App4FeatureAlertsHandler3Handler[] = [];
  private history: App4FeatureAlertsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App4FeatureAlertsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4FeatureAlertsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4FeatureAlertsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4FeatureAlertsHandler3Handler(
  type: string,
  fn: (event: App4FeatureAlertsHandler3Event) => Promise<void>,
  priority = 0
): App4FeatureAlertsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}