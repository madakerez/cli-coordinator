export interface App1FeatureExportHandler3Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureExportHandler3Handler {
  canHandle(event: App1FeatureExportHandler3Event): boolean;
  handle(event: App1FeatureExportHandler3Event): Promise<void>;
  priority: number;
}

export class App1FeatureExportHandler3EventBus {
  private handlers: App1FeatureExportHandler3Handler[] = [];
  private history: App1FeatureExportHandler3Event[] = [];
  private maxHistory = 130;

  register(handler: App1FeatureExportHandler3Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureExportHandler3Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureExportHandler3Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureExportHandler3Handler(
  type: string,
  fn: (event: App1FeatureExportHandler3Event) => Promise<void>,
  priority = 0
): App1FeatureExportHandler3Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}