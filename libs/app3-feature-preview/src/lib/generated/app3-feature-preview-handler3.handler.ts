export interface App3FeaturePreviewHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeaturePreviewHandler3Handler {
  canHandle(event: App3FeaturePreviewHandler3Event): boolean;
  handle(event: App3FeaturePreviewHandler3Event): Promise<void>;
  priority: number;
}

export class App3FeaturePreviewHandler3EventBus {
  private handlers: App3FeaturePreviewHandler3Handler[] = [];
  private history: App3FeaturePreviewHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App3FeaturePreviewHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeaturePreviewHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeaturePreviewHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeaturePreviewHandler3Handler(
  type: string,
  fn: (event: App3FeaturePreviewHandler3Event) => Promise<void>,
  priority = 0
): App3FeaturePreviewHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}