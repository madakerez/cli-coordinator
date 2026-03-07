export interface App2FeatureTagsHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureTagsHandler3Handler {
  canHandle(event: App2FeatureTagsHandler3Event): boolean;
  handle(event: App2FeatureTagsHandler3Event): Promise<void>;
  priority: number;
}

export class App2FeatureTagsHandler3EventBus {
  private handlers: App2FeatureTagsHandler3Handler[] = [];
  private history: App2FeatureTagsHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App2FeatureTagsHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureTagsHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureTagsHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureTagsHandler3Handler(
  type: string,
  fn: (event: App2FeatureTagsHandler3Event) => Promise<void>,
  priority = 0
): App2FeatureTagsHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}