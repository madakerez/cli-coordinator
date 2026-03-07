export interface App3FeaturePreviewHandler2Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeaturePreviewHandler2Handler {
  canHandle(event: App3FeaturePreviewHandler2Event): boolean;
  handle(event: App3FeaturePreviewHandler2Event): Promise<void>;
  priority: number;
}

export class App3FeaturePreviewHandler2EventBus {
  private handlers: App3FeaturePreviewHandler2Handler[] = [];
  private history: App3FeaturePreviewHandler2Event[] = [];
  private maxHistory = 120;

  register(handler: App3FeaturePreviewHandler2Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeaturePreviewHandler2Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeaturePreviewHandler2Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeaturePreviewHandler2Handler(
  type: string,
  fn: (event: App3FeaturePreviewHandler2Event) => Promise<void>,
  priority = 0
): App3FeaturePreviewHandler2Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}