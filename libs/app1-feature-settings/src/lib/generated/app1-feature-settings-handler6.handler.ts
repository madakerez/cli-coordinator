export interface App1FeatureSettingsHandler6Event {
  type: string;
  payload: unknown;
  timestamp: number;
  source: string;
}

export interface App1FeatureSettingsHandler6Handler {
  canHandle(event: App1FeatureSettingsHandler6Event): boolean;
  handle(event: App1FeatureSettingsHandler6Event): Promise<void>;
  priority: number;
}

export class App1FeatureSettingsHandler6EventBus {
  private handlers: App1FeatureSettingsHandler6Handler[] = [];
  private history: App1FeatureSettingsHandler6Event[] = [];
  private maxHistory = 160;

  register(handler: App1FeatureSettingsHandler6Handler): () => void {
    this.handlers.push(handler);
    this.handlers.sort((a, b) => b.priority - a.priority);
    return () => {
      this.handlers = this.handlers.filter(h => h !== handler);
    };
  }

  async dispatch(event: App1FeatureSettingsHandler6Event): Promise<void> {
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history = this.history.slice(-this.maxHistory);
    }
    const applicable = this.handlers.filter(h => h.canHandle(event));
    for (const handler of applicable) {
      await handler.handle(event);
    }
  }

  getHistory(): ReadonlyArray<App1FeatureSettingsHandler6Event> {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

export function createApp1FeatureSettingsHandler6Handler(
  type: string,
  fn: (event: App1FeatureSettingsHandler6Event) => Promise<void>,
  priority = 0
): App1FeatureSettingsHandler6Handler {
  return {
    canHandle: (event) => event.type === type,
    handle: fn,
    priority,
  };
}