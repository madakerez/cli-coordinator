export interface App3FeatureExportHandler5Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App3FeatureExportHandler5Handler {
  canHandle(event: App3FeatureExportHandler5Event): boolean;
  handle(event: App3FeatureExportHandler5Event): Promise<void>;
  priority: number;
}

export class App3FeatureExportHandler5EventBus {
  private handlers: App3FeatureExportHandler5Handler[] = [];
  private history: App3FeatureExportHandler5Event[] = [];
  private maxHistory = 150;

  register(handler: App3FeatureExportHandler5Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App3FeatureExportHandler5Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App3FeatureExportHandler5Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp3FeatureExportHandler5Handler(
  type: string,
  fn: (event: App3FeatureExportHandler5Event) => Promise<void>,
  priority = 0
): App3FeatureExportHandler5Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}