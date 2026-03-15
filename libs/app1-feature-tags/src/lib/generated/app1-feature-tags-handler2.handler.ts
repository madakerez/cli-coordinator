export interface App1FeatureTagsHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureTagsHandler2Handler {
  canHandle(event: App1FeatureTagsHandler2Event): boolean;
  handle(event: App1FeatureTagsHandler2Event): Promise<void>;
  priority: number;
}

export class App1FeatureTagsHandler2EventBus {
  private handlers: App1FeatureTagsHandler2Handler[] = [];
  private history: App1FeatureTagsHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App1FeatureTagsHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureTagsHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureTagsHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureTagsHandler2Handler(
  type: string,
  fn: (event: App1FeatureTagsHandler2Event) => Promise<void>,
  priority = 0
): App1FeatureTagsHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}