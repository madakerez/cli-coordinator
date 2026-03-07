export interface App3FeatureImportHandler4Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureImportHandler4Handler {
  canHandle(event: App3FeatureImportHandler4Event): boolean;
  handle(event: App3FeatureImportHandler4Event): Promise<void>;
  priority: number;
}

export class App3FeatureImportHandler4EventBus {
  private handlers: App3FeatureImportHandler4Handler[] = [];
  private history: App3FeatureImportHandler4Event[] = [];
  private maxHistory = 140;

  register(handler: App3FeatureImportHandler4Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureImportHandler4Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureImportHandler4Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureImportHandler4Handler(
  type: string,
  fn: (event: App3FeatureImportHandler4Event) => Promise<void>,
  priority = 0
): App3FeatureImportHandler4Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}