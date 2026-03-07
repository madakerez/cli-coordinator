export interface App1FeatureExportHandler8Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureExportHandler8Handler {
  canHandle(event: App1FeatureExportHandler8Event): boolean;
  handle(event: App1FeatureExportHandler8Event): Promise<void>;
  priority: number;
}

export class App1FeatureExportHandler8EventBus {
  private handlers: App1FeatureExportHandler8Handler[] = [];
  private history: App1FeatureExportHandler8Event[] = [];
  private maxHistory = 180;

  register(handler: App1FeatureExportHandler8Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureExportHandler8Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureExportHandler8Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureExportHandler8Handler(
  type: string,
  fn: (event: App1FeatureExportHandler8Event) => Promise<void>,
  priority = 0
): App1FeatureExportHandler8Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}