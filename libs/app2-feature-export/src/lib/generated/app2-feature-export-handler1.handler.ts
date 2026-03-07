export interface App2FeatureExportHandler1Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App2FeatureExportHandler1Handler {
  canHandle(event: App2FeatureExportHandler1Event): boolean;
  handle(event: App2FeatureExportHandler1Event): Promise<void>;
  priority: number;
}

export class App2FeatureExportHandler1EventBus {
  private handlers: App2FeatureExportHandler1Handler[] = [];
  private history: App2FeatureExportHandler1Event[] = [];
  private maxHistory = 110;

  register(handler: App2FeatureExportHandler1Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App2FeatureExportHandler1Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App2FeatureExportHandler1Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp2FeatureExportHandler1Handler(
  type: string,
  fn: (event: App2FeatureExportHandler1Event) => Promise<void>,
  priority = 0
): App2FeatureExportHandler1Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}