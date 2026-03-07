export interface App1FeatureWebhooksHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureWebhooksHandler2Handler {
  canHandle(event: App1FeatureWebhooksHandler2Event): boolean;
  handle(event: App1FeatureWebhooksHandler2Event): Promise<void>;
  priority: number;
}

export class App1FeatureWebhooksHandler2EventBus {
  private handlers: App1FeatureWebhooksHandler2Handler[] = [];
  private history: App1FeatureWebhooksHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App1FeatureWebhooksHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureWebhooksHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureWebhooksHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureWebhooksHandler2Handler(
  type: string,
  fn: (event: App1FeatureWebhooksHandler2Event) => Promise<void>,
  priority = 0
): App1FeatureWebhooksHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}