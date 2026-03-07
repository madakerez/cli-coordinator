export interface App1FeatureSettingsHandler7Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureSettingsHandler7Handler {
  canHandle(event: App1FeatureSettingsHandler7Event): boolean;
  handle(event: App1FeatureSettingsHandler7Event): Promise<void>;
  priority: number;
}

export class App1FeatureSettingsHandler7EventBus {
  private handlers: App1FeatureSettingsHandler7Handler[] = [];
  private history: App1FeatureSettingsHandler7Event[] = [];
  private maxHistory = 170;

  register(handler: App1FeatureSettingsHandler7Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureSettingsHandler7Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureSettingsHandler7Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureSettingsHandler7Handler(
  type: string,
  fn: (event: App1FeatureSettingsHandler7Event) => Promise<void>,
  priority = 0
): App1FeatureSettingsHandler7Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}