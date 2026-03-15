export interface App1FeatureImportHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureImportHandler1Handler {
  canHandle(event: App1FeatureImportHandler1Event): boolean;
  handle(event: App1FeatureImportHandler1Event): Promise<void>;
  priority: number;
}

export class App1FeatureImportHandler1EventBus {
  private handlers: App1FeatureImportHandler1Handler[] = [];
  private history: App1FeatureImportHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App1FeatureImportHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureImportHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureImportHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureImportHandler1Handler(
  type: string,
  fn: (event: App1FeatureImportHandler1Event) => Promise<void>,
  priority = 0
): App1FeatureImportHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}