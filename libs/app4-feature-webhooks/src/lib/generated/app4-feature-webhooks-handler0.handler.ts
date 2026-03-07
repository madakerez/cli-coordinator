export interface App4FeatureWebhooksHandler0Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App4FeatureWebhooksHandler0Handler {
  canHandle(event: App4FeatureWebhooksHandler0Event): boolean;
  handle(event: App4FeatureWebhooksHandler0Event): Promise<void>;
  priority: number;
}

export class App4FeatureWebhooksHandler0EventBus {
  private handlers: App4FeatureWebhooksHandler0Handler[] = [];
  private history: App4FeatureWebhooksHandler0Event[] = [];
  private maxHistory = 100;

  register(handler: App4FeatureWebhooksHandler0Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App4FeatureWebhooksHandler0Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App4FeatureWebhooksHandler0Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp4FeatureWebhooksHandler0Handler(
  type: string,
  fn: (event: App4FeatureWebhooksHandler0Event) => Promise<void>,
  priority = 0
): App4FeatureWebhooksHandler0Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}